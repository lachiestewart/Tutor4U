from rest_framework import serializers
from tutor4u.models import User, Student, Tutor


class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "username", "password"]

    def create(self, validated_data):
        user = User.objects.create(username=validated_data["username"])
        user.set_password(validated_data["password"])
        user.save()
        return user

    
class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'phone_number', 'gender', 'profile_photo']


class ListStudentSerializer(serializers.ModelSerializer):
    user = ListUserSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user']

class ListTutorSerializer(serializers.ModelSerializer):
    user = ListUserSerializer()

    class Meta:
        model = Tutor
        fields = ['id', 'user', 'rate', 'availability', 'online', 'face_to_face', 'location', 'qualification', 'about']


