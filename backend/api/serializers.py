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
    

class CardDetailsSerializer(Serializer):
    card_number = CharField(required=True, max_length=20)
    expiry_month = CharField(required=True, max_length=2, validators=[
                             lambda month: 1 <= int(month) <= 12])
    expiry_year = CharField(required=True, max_length=4, validators=[
                            lambda year: datetime.datetime.now().year <= int(year)])
    cvc = CharField(required=True, validators=[
                            lambda cvc: len(cvc) in [3, 4] and cvc.isdigit()])
    email = EmailField(required=True)
