from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import CreateUserSerializer, ListUserSerializer, ListStudentSerializer, ListTutorSerializer
from rest_framework.response import Response
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

    def post(self, request):

        tutors = Tutor.objects.filter(approved=True)
        
        availability_values = request.data.get('availability', [])
        if availability_values:
            tutors = tutors.filter(availability__in=availability_values)   
    
        gender_values = request.data.get('gender', [])
        print(gender_values)
        if gender_values:
            tutors = tutors.filter(user__gender__in=gender_values)
        
        print(tutors)


        serializer = ListTutorSerializer(tutors, many=True)
        return Response(serializer.data)
