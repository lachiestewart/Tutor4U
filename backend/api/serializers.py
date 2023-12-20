from rest_framework.serializers import ValidationError, Serializer, CharField, ModelSerializer, EmailField
from tutor4u.models import User, Student, Tutor
import datetime


class CreateUserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "username", "password"]

    def create(self, validated_data):
        user = User.objects.create(username=validated_data["username"])
        user.set_password(validated_data["password"])
        user.save()
        return user


class ListUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'phone_number', 'gender', 'profile_photo']


class ListStudentSerializer(ModelSerializer):
    user = ListUserSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user']


class ListTutorSerializer(ModelSerializer):
    user = ListUserSerializer()

    class Meta:
        model = Tutor
        fields = ['id', 'user', 'rate', 'available', 'remote',
                  'in_person', 'location', 'qualification', 'about']