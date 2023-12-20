import stripe
from decouple import config

# Stripe API Keys

STRIPE_SECRET_KEY = config("STRIPE_SECRET_KEY")
STRIPE_PUBLISHABLE_KEY = config("STRIPE_PUBLISHABLE_KEY")

stripe.api_key = STRIPE_SECRET_KEY

payment_intent = stripe.PaymentIntent.retrieve('pi_3OPFRIA48Ifx6j8J0gYyDqKF')

payment_intent.confirm(
 payment_method='pm_card_visa',
)