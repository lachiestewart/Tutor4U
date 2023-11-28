from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import StudentSerializer, TutorSerializer, OfferSerializer, WantSerializer, LessonSerializer
from tutor4u.models import Student, Tutor, Offer, Want, Lesson

# View Classes

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class TutorView(viewsets.ModelViewSet):
    serializer_class = TutorSerializer
    queryset = Tutor.objects.all()

class OfferView(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()

class WantView(viewsets.ModelViewSet):
    serializer_class = WantSerializer
    queryset = Want.objects.all()

class LessonView(viewsets.ModelViewSet):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()

class TutorOffersView(APIView):
    def get(self, request, tutor_num):
        offers = Offer.objects.filter(tutor=tutor_num)
        offer_serial = OfferSerializer(offers, many=True)
        return Response(offer_serial.data)


# class XView(viewsets.ModelViewSet):
#     serializer_class = XSerializer
#     queryset = X.objects.all()