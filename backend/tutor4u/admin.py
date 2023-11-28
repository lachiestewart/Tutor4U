from django.contrib import admin
from tutor4u.models import Student, Tutor, Offer, Want, Lesson


# Admin Classes

class StudentAdmin(admin.ModelAdmin):
    list_display = Student.student_fields

class TutorAdmin(admin.ModelAdmin):
    list_display = Tutor.tutor_fields

class OfferAdmin(admin.ModelAdmin):
    list_display = Offer.offer_fields

class WantAdmin(admin.ModelAdmin):
    list_display = Want.want_fields

class LessonAdmin(admin.ModelAdmin):
    list_display = Lesson.lesson_fields

# class XAdmin(admin.ModelAdmin):
#     list_display = X.x_fields



# Register your models here.

admin.site.register(Student, StudentAdmin)
admin.site.register(Tutor, TutorAdmin)
admin.site.register(Offer, OfferAdmin)
admin.site.register(Want, WantAdmin)
admin.site.register(Lesson, LessonAdmin)
# admin.site.register(X, XAdmin)
