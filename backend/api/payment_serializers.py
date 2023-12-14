import datetime

from rest_framework.serializers import ValidationError, Serializer, CharField

"""
check_expiry_month = lambda x: None if 1 <= int(x) <= 12 else ValidationError("Invalid expiry month") 
check_expiry_year = lambda x: None if int(x) >= datetime.datetime.now().year else ValidationError("Invalid expiry year")
check_cvc = lambda x: None if 3 <= len(x) <= 4 else ValidationError("Invalid cvc number")
check_payment_method = lambda x: None if x.lower() in ["card"] else ValidationError("Invalid payment_method")
"""

def check_expiry_month(value):
    if not 1 <= int(value) <= 12:
        raise ValidationError("Invalid expiry month.")


def check_expiry_year(value):
    today = datetime.datetime.now()
    if not int(value) >= today.year:
        raise ValidationError("Invalid expiry year.")


def check_cvc(value):
    if not 3 <= len(value) <= 4:
        raise ValidationError("Invalid cvc number.")


def check_payment_method(value):
    payment_method = value.lower()
    if payment_method not in ["card"]:
        raise ValidationError("Invalid payment_method.")


class CardInformationSerializer(Serializer):
    card_number = CharField(
        max_length=150,
        required=True
    )
    expiry_month = CharField(
        max_length=150,
        required=True,
        validators=[check_expiry_month],
    )
    expiry_year = CharField(
        max_length=150,
        required=True,
        validators=[check_expiry_year],
    )
    cvc = CharField(
        max_length=150,
        required=True,
        validators=[check_cvc],
    )

