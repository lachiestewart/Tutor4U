from django.contrib import admin
from .models import Student, Tutor, Offer, Want, Lesson

# Field Lists

user_fields = ['username', 'password', 'first_name', 'last_name', 'phone_number', 'email', 'gender', 'profile_photo']

student_fields = []

tutor_fields = ['rate', 'available', 'remote', 'in_person', 'location', 'qualification', 'about']

offer_fields = ['tutor', 'subject', 'level']

want_fields = ['student', 'subject', 'level']

lesson_fields = ['tutor', 'student', 'subject', 'level', 'date', 'duration', 'rate']


# Admin Classes

class StudentAdmin(admin.ModelAdmin):
    list_display = user_fields + student_fields

class TutorAdmin(admin.ModelAdmin):
    list_display = user_fields + tutor_fields

class OfferAdmin(admin.ModelAdmin):
    list_display = offer_fields

class WantAdmin(admin.ModelAdmin):
    list_display = want_fields

class LessonAdmin(admin.ModelAdmin):
    list_display = lesson_fields

# class XAdmin(admin.ModelAdmin):
#     list_display = X_fields



# Register your models here.

admin.site.register(Student, StudentAdmin)
admin.site.register(Tutor, TutorAdmin)
admin.site.register(Offer, OfferAdmin)
admin.site.register(Want, WantAdmin)
admin.site.register(Lesson, LessonAdmin)
# admin.site.register(X, XAdmin)
