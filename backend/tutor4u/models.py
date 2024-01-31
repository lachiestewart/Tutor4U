import uuid
from django.db.models import *
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import validate_image_file_extension

# Directory within mediafiles to store profile photos
MEDIA_DIR = "uploads/"

# Lists of strings for choice fields
GENDER_LIST = ["Male", "Female", "Non-Binary", "Other"]
SUBJECT_LIST = ["Mathematics", "Physics", "Chemistry", "Biology", "English"]
LEVEL_LIST = ["NCEA 1", "NCEA 2", "NCEA 3", "NCEA Scholarship",
              "100 Level", "200 Level", "300 Level", "400 Level", "Postgraduate"]
AVAILABILITY_LIST = ["Available", "Limited Availability", "Not Available"]
LOCATION_LIST = ["Dunedin", "Christchurch", "Wellington",
                 "Palmerston North", "Hamilton", "Auckland"]

# Converts list of readable choices into map of (db value, readable value)


def choiceMapper(choice_list): return [
    (choice.upper().replace(" ", "_"), choice) for choice in choice_list]


# Choice field maps
subject_choices = choiceMapper(SUBJECT_LIST)
level_choices = choiceMapper(LEVEL_LIST)
gender_choices = choiceMapper(GENDER_LIST)
availability_choices = choiceMapper(AVAILABILITY_LIST)
location_choices = choiceMapper(LOCATION_LIST)


class UserManager(BaseUserManager):
    """Creates a manager for the custom User class"""

    use_in_migration = True

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')

        if not password:
            raise ValueError('Password is required')

        extra_fields.setdefault('is_active', True)

        user = self.model(email=self.normalize_email(email), **extra_fields)
        # if not password.startswith(('pbkdf2_sha256$', 'bcrypt$', 'argon2')):
        #     password = make_password(password)
        print("original password", password)

        user.set_password(password)

        print("hashed password", user.password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser = True')

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Extends the AbstractUser class, adds relevant fields"""

    # Fields
    username = CharField(max_length=255, default=uuid.uuid4, unique=True)
    email = EmailField(unique=True)
    phone_number = CharField(max_length=15, null=True, blank=True)
    gender = CharField(max_length=10, choices=gender_choices, default="")
    profile_photo = ImageField(upload_to=MEDIA_DIR, validators=[
                               validate_image_file_extension], null=True, blank=True)
    is_admin = BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.first_name + " " + self.last_name if self.first_name or self.last_name else self.email


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
    onboarding_stage = PositiveSmallIntegerField(default=0)
    rate = DecimalField(max_digits=4, decimal_places=2)
    availability = CharField(
        max_length=20, choices=availability_choices, default="")
    online = BooleanField(default=True)
    face_to_face = BooleanField(default=True)
    location = CharField(max_length=30, choices=location_choices)
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
