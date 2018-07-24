# from django.contrib.auth.models import PermissionsMixin
from django.core.validators import RegexValidator
from django.db import models

from django.conf import settings
# from project.api.helpers import code_generator
from project.api.manager import EmployeeProfileManager


# class EmployeePersonalProfile(models.Model):
class EmployeePersonalProfile(models.Model):
    """Represent a employee personal profile inside our systemzx"""
    # profile_image = models.ImageField(
    #     upload_to='profile_image',
    #     blank=True,
    #     null=True,
    # )
    user = models.OneToOneField(
        related_name="employee_profile",
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
    )
    avatar = models.ImageField(
        blank=True,
        null=True,
    )
    country = models.CharField(
        max_length=200,
        null=True
    )
    street_and_number = models.CharField(
        max_length=200,
        null=True,
    )
    city = models.CharField(
        max_length=200,
        null=True,
    )
    county = models.CharField(
        max_length=200,
        null=True,
    )
    postcode = models.CharField(
        max_length=200,
        null=True,
    )
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    )
    phone_number = models.CharField(
        validators=[phone_regex],
        max_length=17,
        blank=True,
        null=True,
    )

    # Object manager
    objects = EmployeeProfileManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name,', 'last_name']

    # Helper functions
    def get_full_name(self):
        """Used to get a user's full name"""
        return {self.user.first_name}, {self.user.last_name}  # self gets the base object

    def get_short_name(self):
        """Used to get a user's short name"""
        return self.user.first_name

    # str function - required in Django - knows how to return object as a string
    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""
        return self.user.username  # Email is unique
