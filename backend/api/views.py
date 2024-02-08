from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer, StudentSerializer, TutorSerializer, OfferSerializer
from rest_framework.response import Response
from .permissions import IsAdmin, IsStudent, IsTutor
from tutor4u.models import User, Student, Tutor, Offer
from django.db.models import Q
from rest_framework import status


# View for registering users
class CreateUserView(APIView):

    permission_classes = []

    def post(self, request):
        data = request.data
        user = User.objects.create(**data)
        user.set_password(data["password"])
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class CreateStudentView(APIView):

    def post(self, request):
        try:
            user = User.objects.get(id=request.data["user"])
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        student_data = {
            'user': user,
        }
        
        if Student.objects.filter(user=user).exists():
            return Response({"error": "Student already exists for this user."}, status=status.HTTP_400_BAD_REQUEST)
        
        student = Student.objects.create(**student_data)
        student.save()

        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateTutorView(APIView):

    def post(self, request):
        try:
            user = User.objects.get(id=request.data["user"])
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        
        tutor_data = {
            'user': user,
            'onboarding_stage': 1,
            'approved': False,
            **{key: value for key, value in request.data.items() if key != 'user'}
        }

        # tutor_data.update({key: value for key, value in request.data.items() if key not in tutor_data.keys()})
        
        if Tutor.objects.filter(user=user).exists():
            return Response({"error": "Tutor already exists for this user."}, status=status.HTTP_400_BAD_REQUEST)
        
        tutor = Tutor.objects.create(**tutor_data)
        tutor.save()

        serializer = TutorSerializer(tutor)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



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
class TutorView(APIView):

    permission_classes = []

    def get(self, request):
        tutor_id = request.query_params.get('id', None)
        user_id = request.query_params.get('user', None)

        try:

            if tutor_id:
                tutor = Tutor.objects.get(id=tutor_id)
            elif user_id:
                user = User.objects.get(id=user_id)
                tutor = Tutor.objects.get(user=user)

            serializer = TutorSerializer(tutor)
            return Response(serializer.data)
        
        except Tutor.DoesNotExist or User.DoesNotExist:

            return Response({"error": "tutor does not exist"})
        

class StudentView(APIView):

    permission_classes = []

    def get(self, request):
        student_id = request.query_params.get('id', None)
        user_id = request.query_params.get('user', None)

        try:

            if student_id:
                student = Student.objects.get(id=student_id)
            elif user_id:
                user = User.objects.get(id=user_id)
                student = Student.objects.get(user=user)

            serializer = StudentSerializer(student)
            return Response(serializer.data)
        
        except Student.DoesNotExist or User.DoesNotExist:

            return Response({"error": "student does not exist"})



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


class LoginView(APIView):

    permission_classes = []

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        print(email, password)

        try:
            user = User.objects.get(email=email)
            

            if not user.check_password(password):
                return Response({"error": "incorrect password"}, status=status.HTTP_404_NOT_FOUND)
            
            is_student = Student.objects.filter(user=user).exists()
            is_tutor = Tutor.objects.filter(user=user).exists()

            role = 'tutor' if is_tutor else 'student' if is_student else None

            serializer = UserSerializer(user)
            response_data = serializer.data
            response_data['role'] = role

            return Response(response_data)
                
        except User.DoesNotExist:
            return Response({"error": "user does not exist"}, status=status.HTTP_404_NOT_FOUND)


# class UserView(APIView):
    
#     permission_classes = []
    
#     def get(self, request, pk):
#         try:
#             user = User.objects.get(id=pk)

#             is_student = Student.objects.filter(user=user).exists()
#             is_tutor = Tutor.objects.filter(user=user).exists()

#             role = 'tutor' if is_tutor else 'student' if is_student else None

#             serializer = UserSerializer(user)
#             response_data = serializer.data
#             response_data['role'] = role
            
#             return Response(response_data)
#         except User.DoesNotExist:
#             return Response({"error": f"user {pk} does not exist"})
