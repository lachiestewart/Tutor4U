from rest_framework import serializers
from tutor4u.models import Student, Tutor, Offer, Want, Lesson

# Serializer Classes

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['username', 'first_name', 'last_name', 'phone_number', 'email', 'gender', 'profile_photo']

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = ['username', 'first_name', 'last_name', 'phone_number', 'email', 'gender', 'profile_photo', 'rate', 'available', 'remote', 'in_person', 'location', 'qualification', 'about']

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = Offer.offer_fields


class WantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Want
        fields = Want.want_fields

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = Lesson.lesson_fields

# class XSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = X
#         fields = X.x_fields
