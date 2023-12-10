from django.db.models import *
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import validate_image_file_extension

# Directory within mediafiles to store profile photos
MEDIA_DIR = "uploads/"

# Lists of strings for choice fields
GENDER_LIST = ["Male", "Female", "Non-Binary", "Other"]
SUBJECT_LIST = ["Mathematics", "Physics", "Chemistry", "Biology", "English"]
LEVEL_LIST = ["NCEA 1", "NCEA 2", "NCEA 3", "NCEA Scholarship", "100 Level", "200 Level", "300 Level", "400 Level", "Postgraduate"]

# Converts list of readable choices into map of (db value, readable value)
choiceMapper = lambda choice_list: [(choice.upper().replace("-", "_").replace(" ", "_"), choice) for choice in choice_list]

# Choice field maps
subject_choices = choiceMapper(SUBJECT_LIST)
level_choices = choiceMapper(LEVEL_LIST)
gender_choices = choiceMapper(GENDER_LIST)

class UserManager(BaseUserManager):
    """Creates a manager for the custom User class"""

    use_in_migration = True

    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('Username is Required')

        if not password:
            raise ValueError('Password is Required')

        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff = True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser = True')

        return self.create_user(username, password, **extra_fields)


class User(AbstractUser):
    """Extends the AbstractUser class, adds relevant fields"""

    # Fields
    phone_number = CharField(max_length=15, null=True, blank=True)
    gender = CharField(max_length=10, choices=gender_choices, default="")
    profile_photo = ImageField(upload_to=MEDIA_DIR, validators=[validate_image_file_extension], null=True, blank=True)
    is_admin = BooleanField(default=False)
    is_tutor = BooleanField(default=False)
    is_student = BooleanField(default=False)

    objects = UserManager()

    def __str__(self):
        return self.username


class Student(Model):
    """Extends the Model class, stores info about Users who are Students"""

    # Fields
    id = BigAutoField(primary_key=True)
    user = OneToOneField(User, blank=False, on_delete=CASCADE)
    
    def __str__(self):
        return str(self.user)


class Tutor(Model):
    """Extends the Model class, stores info about Users who are Tutors"""

    # Fields
    id = BigAutoField(primary_key=True)
    user = OneToOneField(User, blank=False, on_delete=CASCADE)
    approved = BooleanField(default=False)
    rate = DecimalField(max_digits=4, decimal_places=2)
    available = BooleanField(default=True)
    remote = BooleanField(default=True)
    in_person = BooleanField(default=True)
    location = CharField(max_length=30)
    qualification = CharField(max_length=50)
    about = CharField(max_length=200)

    def __str__(self):
        return str(self.user)


class Want(Model):
    """Extends the Model class, connects Students with the subjects they want to learn"""

    # Fields
    id = BigAutoField(primary_key=True)
    student = ForeignKey(Student, blank=False, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)

    def __str__(self):
        return f"{self.student.user} wants {self.subject} at {self.level}"


class Offer(Model):
    """Extends the Model class, connects Tutors with the subjects they offer to tutor"""

    # Fields
    id = BigAutoField(primary_key=True)
    tutor = ForeignKey(Tutor, blank=False, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)

    def __str__(self):
        return f"{self.tutor.user} offers {self.subject} at {self.level}"


class Lesson(Model):
    """Extends the Model class, connects Tutors, Students and the topics covered in a lesson"""

    # Fieldsblank=False
    id = BigAutoField(primary_key=True)
    tutor = ForeignKey(Tutor, blank=False, on_delete=CASCADE)
    student = ForeignKey(Student, blank=False, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)
    date = DateField()
    duration = PositiveSmallIntegerField()
    rate = DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return f"{self.tutor.user} - {self.student.user} - {self.subject}"
