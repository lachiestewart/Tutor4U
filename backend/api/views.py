from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreateUserSerializer, ListUserSerializer, ListStudentSerializer, ListTutorSerializer, CardDetailsSerializer
from .permissions import IsAdmin, IsStudent, IsTutor
from tutor4u.models import User, Student, Tutor
from django.conf import settings
import stripe

PAYMENT_AMOUNT = 1000  # in cents
PAYMENT_CURRENCY = 'usd'

# View for registering users


class RegisterUserView(APIView):

    permission_classes = []

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# View for getting all Users
class AllUsersView(APIView):

    permission_classes = []

    def get(self, request):
        users = User.objects.all()
        serializer = ListUserSerializer(users, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllStudentsView(APIView):

    permission_classes = []

    def get(self, request):
        students = Student.objects.all()
        serializer = ListStudentSerializer(students, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllTutorsView(APIView):

    permission_classes = []

    def get(self, request):
        tutors = Tutor.objects.filter(approved=True)
        serializer = ListTutorSerializer(tutors, many=True)
        return Response(serializer.data)


stripe.api_key = settings.STRIPE_SECRET_KEY


def create_payment_intent():
    try:
        # payment_details = {
        #     'type':'card',
        #     'card': {
        #         'number': card_details['card_number'],
        #         'exp_month': card_details['expiry_month'],
        #         'exp_year': card_details['expiry_year'],
        #         'cvc': card_details['cvc'],
        #     }
        # }
        payment_intent = stripe.PaymentIntent.create(
            amount=PAYMENT_AMOUNT,
            currency=PAYMENT_CURRENCY,
            payment_method_types=['card'],
        )
        return payment_intent
    except stripe.error.StripeError as e:
        print(f"Error creating payment intent: {e}")
        return None


def confirm_payment_intent(payment_intent_id):
    try:
        confirmed_payment_intent = stripe.PaymentIntent.confirm(
            payment_intent_id)
        return confirmed_payment_intent
    except stripe.error.StripeError as e:
        print(f"Error confirming payment intent: {e}")
        return None


class PaymentIntentView(APIView):

    def post(self, request):
        # serializer = CardDetailsSerializer(data=request.data)

        # if not serializer.is_valid():
        #     return Response({"error": "Invalid input"}, status=400)

        # card_details = serializer.validated_data
        # print(card_details)
        # print(card_details['card_number'])


        payment_intent = create_payment_intent()
        print(payment_intent)
        return Response({"clientSecret":payment_intent.client_secret})

        if not payment_intent:
            return Response({"error": "Payment Intent creation failed"}, status=500)

        confirmed_payment_intent = confirm_payment_intent(payment_intent['id'])

        if confirmed_payment_intent:
            return Response({"error": "Payment Intent confirmation failed"}, status=500)

        print("fuck yeah")
        return Response({"success": True, "payment_intent_id": confirmed_payment_intent['id']})
