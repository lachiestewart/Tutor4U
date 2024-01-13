from django.urls import path
from .views import CreatePaymentIntentView, UpdatePaymentIntentView, PublishableKeyView

urlpatterns = [
    path('create', CreatePaymentIntentView.as_view(), name='create_payment_intent'),
    path('config', PublishableKeyView.as_view(), name='get_publishable_key'),
]