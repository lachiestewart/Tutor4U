from rest_framework import serializers
from tutor4u.models import Student, Tutor, Offer, Want, Lesson

# Serializer Classes

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = Student.student_fields

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = Tutor.tutor_fields

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
