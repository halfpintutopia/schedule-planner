from django.db import models


class HolidayRequest(models.Model):
    request = models.ForeignKey(
        # Request,
        verbose_name="request",
        to="request.Request",
        on_delete=models.CASCADE,
    )
    holiday_from = models.DateField()
    holiday_until = models.DateField()
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

    # str function - required in Django - knows how to return object as a string
    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""
        return self.request.employee_profile.employee.user.username  # Email is unique
