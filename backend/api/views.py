from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import CreateUserSerializer, ListUserSerializer, ListStudentSerializer, ListTutorSerializer
from rest_framework.response import Response
from .permissions import IsAdmin, IsStudent, IsTutor
from tutor4u.models import User, Student, Tutor

# Big number used for default maximum for querying tutors by hourly rate
INF = 1000

def isBoolString(string):
    return string.lower() in ["true", "false"]

# View for registering users
class RegisterUserView(APIView):

    permission_classes = []

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# View for getting all Users
class AllUsersView(APIView):

    permission_classes = []

    def get(self, request):
        users = User.objects.all()
        serializer = ListUserSerializer(users, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllStudentsView(APIView):

    permission_classes = []

    def get(self, request):
        students = Student.objects.all()
        serializer = ListStudentSerializer(students, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllTutorsView(APIView):

    permission_classes = []

    def get(self, request):
        
        # Get only approved and available tutors
        tutors = Tutor.objects.filter(approved=True, available=True)

        # Filter by location if used
        location = request.query_params.get('location', None)
        if location is not None:
            tutors = tutors.filter(location=location)

        # Filter by hourly rate if used
        minimum = request.query_params.get('minimum', 0)
        tutors = tutors.filter(rate__gte=int(minimum))

        maximum = request.query_params.get('maximum', INF)
        tutors = tutors.filter(rate__lte=maximum)

        # Filter by gender if used
        gender = request.query_params.get('gender', None)
        if gender is not None:
            tutors = tutors.filter(user__gender=gender)

        # Filter by remote if used
        remote = request.query_params.get('remote', None)
        if remote is not None and isBoolString(remote):
            tutors = tutors.filter(remote=eval(remote))





        serializer = ListTutorSerializer(tutors, many=True)
        return Response(serializer.data)
