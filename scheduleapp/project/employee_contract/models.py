from django.db import models
from project.api.helpers import code_generator
from project.api.manager import EmployeeProfileManager


# from project.employee_personal.models import EmployeePersonalProfile


class EmployeeContractProfile(models.Model):
    """
    Represent a employee contract profile inside our system
    """
    employee = models.OneToOneField(
        # EmployeePersonalProfile,
        verbose_name="employee",
        to="employee_personal.EmployeePersonalProfile",
        on_delete=models.CASCADE,
    )
    is_active = models.BooleanField(
        default=True,
    )
    is_staff = models.BooleanField(
        default=False,
    )
    contract_started = models.DateTimeField(
        verbose_name="joined_date",
        auto_now_add=True,
        null=True,
    )
    contract_number = models.CharField(
        verbose_name="contract number",
        max_length=15,
        unique=True,
        default=code_generator,
    )

    # Object manager
    objects = EmployeeProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def generate_new_code(self):
        while True:
            code = code_generator()
            if EmployeeContractProfile.objects.filter(contract_number=code):
                continue
            break
        self.contract_number = code
        self.save()
