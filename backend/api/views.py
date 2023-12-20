from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CreateUserSerializer, ListUserSerializer, ListStudentSerializer, ListTutorSerializer
from .permissions import IsAdmin, IsStudent, IsTutor
from tutor4u.models import User, Student, Tutor



# View for registering users
class RegisterUserView(APIView):

    permission_classes = []

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# View for getting all Users
class SearchUsersView(APIView):

    permission_classes = []

    def get(self, request):
        users = User.objects.all()
        serializer = ListUserSerializer(users, many=True)
        return Response(serializer.data)


# View for getting all Students
class SearchStudentsView(APIView):

    permission_classes = []

    def get(self, request):
        students = Student.objects.all()

        serializer = ListStudentSerializer(students, many=True)
        return Response(serializer.data)


# View for getting all Students
class SearchTutorsView(APIView):

    permission_classes = []

    def get(self, request):
        tutors = Tutor.objects.filter(approved=True)

        available = request.query_params.get('available')

        if available is not None:
            try:
                tutors = tutors.filter(available=eval(available))
            except:
                return Response({"error": "Invalid value for 'available'"}, status=status.HTTP_400_BAD_REQUEST)


        tutors = tutors.filter()

        serializer = ListTutorSerializer(tutors, many=True)
        return Response(serializer.data)
            
