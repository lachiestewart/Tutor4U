from django.urls import path
from .views import RegisterUserView, SearchUsersView, SearchStudentsView, SearchTutorsView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', RegisterUserView.as_view(), name="sign_up"),
    path('search-users', SearchUsersView.as_view(), name='all-users'),
    path('search-students', SearchStudentsView.as_view(), name='all-students'),
    path('search-tutors', SearchTutorsView.as_view(), name='all-tutors'),
]