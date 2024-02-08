from django.urls import path
from .views import CreateUserView, CreateStudentView, CreateTutorView, AllUsersView, AllStudentsView, AllTutorsView, TutorView, OfferByTutor, LoginView
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('all-users', AllUsersView.as_view(), name='all-users'),
    path('user/create', CreateUserView.as_view(), name="create-user"),
    
    path('all-students', AllStudentsView.as_view(), name='all-students'),
    path('student/create', CreateStudentView.as_view(), name="create-student"),
    
    path('all-tutors', AllTutorsView.as_view(), name='all-tutors'),
    path('tutor', TutorView.as_view(), name='tutor'),
    path('tutor/create', CreateTutorView.as_view(), name='create-tutor'),
    
    path('offers', OfferByTutor.as_view(), name='tutor-offers'),

    path('login', LoginView.as_view(), name='login'),
]