from django.contrib import admin
from .models import User, Student, Tutor, Want, Offer, Lesson

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Tutor)
admin.site.register(Want)
admin.site.register(Offer)
admin.site.register(Lesson)