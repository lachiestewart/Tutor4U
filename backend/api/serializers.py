from rest_framework import serializers
from tutor4u.models import User, Student, Tutor, Offer
from tutor4u.models import User
from rest_framework import serializers
from tutor4u.models import User, Student


    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'first_name', 'last_name', 'phone_number', 'gender', 'profile_photo']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user']

class TutorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Tutor
        fields = ['id', 'user', 'approved', 'onboarding_stage', 'rate', 'availability', 'online', 'face_to_face', 'location', 'qualification', 'about']

class OfferSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offer
        fields = ['id', 'tutor', 'subject', 'level']


