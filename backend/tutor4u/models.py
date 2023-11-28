from django.db.models import *
from django.core.validators import *

# Directory within mediafiles to store profile photos
MEDIA_DIR = "uploads/"

# Regex for field validation
numeric_regex = r"[0-9]"
alpha_regex = r"[a-zA-Z]"
alphanumeric_regex = "(" + numeric_regex + "|" + alpha_regex + ")"
space_char_regex = "[\s-]"

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


class User(Model):
    """Extends the Model class"""

    # User specific regex
    phone_number_regex = "^" + numeric_regex + r"{9,10}$"

    # Validators
    phone_number_validator = RegexValidator(phone_number_regex)
    email_validator = EmailValidator()

    # Field List
    user_fields = ['username', 'password', 'first_name', 'last_name', 'phone_number', 'email', 'gender', 'profile_photo']

    # Fields
    username = CharField(max_length=50, unique=True)
    password = CharField(max_length=50)
    first_name = CharField(max_length=50)
    last_name = CharField(max_length=50)
    phone_number = CharField(max_length=15, validators=[phone_number_validator])
    email = CharField(max_length=64, validators=[email_validator])
    gender = CharField(max_length=10, choices=gender_choices)
    profile_photo = ImageField(upload_to=MEDIA_DIR, validators=[validate_image_file_extension])

    class Meta:
        abstract = True
    
    def __str__(self):
        return f"{self.username}"


class Student(User):
    """Extends the User class, stores info about Users who are Students"""
    
    # Field List
    student_fields = User.user_fields + []

    # Fields
    


class Tutor(User):
    """Extends the User class, stores info about Users who are Tutors"""
    
    # Field List
    tutor_fields = User.user_fields + ['rate', 'available', 'remote', 'in_person', 'location', 'qualification', 'about']

    # Fields
    rate = DecimalField(max_digits=4, decimal_places=2)
    available = BooleanField(default=True)
    remote = BooleanField(default=True)
    in_person = BooleanField(default=True)
    location = CharField(max_length=30)
    qualification = CharField(max_length=50)
    about = CharField(max_length=200)


class Offer(Model):
    """Extends the Model class, connects Tutors with the subjects they offer to tutor"""

    # Field List
    offer_fields = ['tutor', 'subject', 'level']

    # Fields
    tutor = ForeignKey(Tutor, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)



class Want(Model):
    """Extends the Model class, connects Students with the subjects they want to learn"""

    # Field List
    want_fields = ['student', 'subject', 'level']

    # Fields
    student = ForeignKey(Student, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)


class Lesson(Model):
    """Extends the Model class, connects Tutors, Students and the topics covered in a lesson"""
    
    # Field List
    lesson_fields = ['tutor', 'student', 'subject', 'level', 'date', 'duration', 'rate']

    # Fields
    tutor = ForeignKey(Tutor, on_delete=CASCADE)
    student = ForeignKey(Student, on_delete=CASCADE)
    subject = CharField(max_length=20, choices=subject_choices)
    level = CharField(max_length=20, choices=level_choices)
    date = DateField()
    duration = PositiveSmallIntegerField()
    rate = DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return f"{self.tutor.username} - {self.student.username} - {self.subject}"
