from django.urls import path
from rest_framework import routers
from api.views import StudentView, TutorView, OfferView, WantView, LessonView, TutorOffersView


router = routers.DefaultRouter()
router.register('student', StudentView)
router.register('tutor', TutorView)
router.register('offer', OfferView)
router.register('want', WantView)
router.register('lesson', LessonView)

urlpatterns = [
    path('tutoroffers/<int:tutor_num>/', TutorOffersView.as_view())
]

urlpatterns += router.urls