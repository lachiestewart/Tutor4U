from django.urls import path
from .views import CreatePaymentIntentView, UpdatePaymentIntentView

urlpatterns = [
    path('create', CreatePaymentIntentView.as_view(), name='create_payment_intent'),
    path('update', UpdatePaymentIntentView.as_view(), name='update_payment_intent'),
]