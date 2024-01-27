from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import CreateUserSerializer, UserSerializer, StudentSerializer, TutorSerializer, OfferSerializer
from rest_framework.response import Response
from .permissions import IsAdmin, IsStudent, IsTutor
from tutor4u.models import User, Student, Tutor, Offer
from django.db.models import Q


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
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllStudentsView(APIView):

    permission_classes = []

    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)


# View for getting all Students
class AllTutorsView(APIView):

    permission_classes = []

    def post(self, request):
        tutors = Tutor.objects.filter(approved=True)

        subjects = request.data.get('subjects', [])
        if subjects:
            tutors = tutors.filter(offer__subject__in=subjects)

        levels = request.data.get('levels', [])
        if levels:
            tutors = tutors.filter(offer__level__in=levels)

        locations = request.data.get('location', [])
        if locations:
            tutors = tutors.filter(location__in=locations)

        availability = request.data.get('availability', [])
        if availability:
            tutors = tutors.filter(availability__in=availability)

        gender = request.data.get('gender', [])
        if gender:
            tutors = tutors.filter(user__gender__in=gender)

        lesson_formats = request.data.get('lesson_format', [])
        if lesson_formats:
            face_to_face = "FACE_TO_FACE" in lesson_formats
            online = "ONLINE" in lesson_formats
            tutors = tutors.filter(
                Q(face_to_face=face_to_face) | Q(online=online))

        serializer = TutorSerializer(tutors, many=True)
        return Response(serializer.data)


# Get info for one tutor
class TutorInfo(APIView):

    permission_classes = []

    def get(self, request):
        tutor_id = request.query_params.get('id')
        try:
            tutor = Tutor.objects.get(id=tutor_id)
            serializer = TutorSerializer(tutor)
            return Response(serializer.data)
        except Tutor.DoesNotExist:
            return Response({"error": f"tutor {tutor_id} does not exist"})

class OfferByTutor(APIView):

    permission_classes = []
    
    def get(self, request):
        tutor_id = request.query_params.get('id')
        try:
            tutor = Tutor.objects.get(id=tutor_id)
            offers = Offer.objects.filter(tutor=tutor)
            
            print(tutor_id, tutor, offers)

            serializer = OfferSerializer(offers, many=True)
            return Response(serializer.data)
        except Tutor.DoesNotExist:
            return Response({"error": f"tutor {tutor_id} does not exist"})
