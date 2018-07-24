from django.db import models

# from project.employee_contract.models import EmployeeContractProfile


class Request(models.Model):
    employee_profile = models.ForeignKey(
        # EmployeeContractProfile,
        verbose_name="employee_profile",
        to="employee_contract.EmployeeContractProfile",
        on_delete=models.CASCADE,
    )

    HOLIDAY = 'HO'
    TIME_BACK = 'TB'
    SHIFT_SWAP = 'SS'
    OVERTIME = 'OV'
    REQUEST_TYPE = (
        (HOLIDAY, 'holiday'),
        (TIME_BACK, 'time-back'),
        (SHIFT_SWAP, 'shift-swap'),
        (OVERTIME, 'overtime'),
    )
    request_type = models.CharField(
        max_length=255,
        choices=REQUEST_TYPE,
        default=SHIFT_SWAP,
    )
    description = models.CharField(
        max_length=255,
        null=True,
    )
    date_created = models.DateTimeField(
        auto_now_add=True
    )
    date_approved = models.DateTimeField(
        auto_now_add=True
    )

    def is_uppercase(self):
        return self.request_type in (self.HOLIDAY, self.OVERTIME)

    # str function - required in Django - knows how to return object as a string
    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""
        return self.employee_profile.user.username  # Email is unique
