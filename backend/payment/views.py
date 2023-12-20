from rest_framework.views import APIView
from rest_framework.response import Response

from django.conf import settings
import stripe

# If you are testing your webhook locally with the Stripe CLI, you can find the
# endpoint's secret by running `stripe listen`. Otherwise, find your
# endpoint's secret in your webhook settings in the Developer Dashboard
endpoint_secret = 'whsec_123'

stripe.api_key = settings.STRIPE_SECRET_KEY

class CreatePaymentIntentView(APIView):
    def get(self, request):

        amount = request.query_params.get('amount')

        if amount is None:
            return Response({'message': 'Amount is not provided'})

        # Create a PaymentIntent with the amount
        intent = stripe.PaymentIntent.create(
            amount=int(amount),  # amount in cents
            currency='nzd',
            payment_method_types=['card'],
        )

        print(f"created payment intent id: {intent['id']}")

        # Return the client secret
        return Response({'client_secret': intent['client_secret']})
        

class UpdatePaymentIntentView(APIView):

    def post(self, request):
        event = None
        payload = request.data
        sig_header = request.headers['STRIPE_SIGNATURE']

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            # Invalid payload
            raise e
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            raise e

        # Handle the event
        if event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']
            payment_intent_id = payment_intent['id']
            print(f'PaymentIntent {payment_intent_id} succeeded')
        else:
            print(f'Unhandled event type {event["type"]}')

        return Response(success=True)