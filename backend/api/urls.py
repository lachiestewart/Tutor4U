from django.urls import path
from rest_framework import routers
from api.views import StudentView, TutorView, OfferView, WantView, LessonView, TutorOffersView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register('student', StudentView, 'student_view')
router.register('tutor', TutorView, 'tutor_view')
router.register('offer', OfferView, 'offer_view')
router.register('want', WantView, 'want_view')
router.register('lesson', LessonView, 'lesson_view')

urlpatterns = [
    path('tutoroffers/<int:tutor_num>/', TutorOffersView.as_view(), 'tutor_offers'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns += router.urls