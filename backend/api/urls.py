from django.urls import path
from .views import RegisterUserView, AllUsersView, AllStudentsView, AllTutorsView, TutorInfo, OfferByTutor
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', RegisterUserView.as_view(), name="sign_up"),
    path('all-users', AllUsersView.as_view(), name='all-users'),
    path('all-students', AllStudentsView.as_view(), name='all-students'),
    path('all-tutors', AllTutorsView.as_view(), name='all-tutors'),
    path('tutor', TutorInfo.as_view(), name='tutor'),
    path('offers', OfferByTutor.as_view(), name='offers'),
]