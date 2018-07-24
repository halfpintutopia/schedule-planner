from django.db import models


# from project.request.models import Request


class OvertimeRequest(models.Model):
    request = models.ForeignKey(
        # Request,
        verbose_name="request",
        to="request.Request",
        on_delete=models.CASCADE,
    )
    availabilty = models.DateField()
    date_created = models.DateTimeField(
        auto_now_add=True
    )
    date_approved = models.DateTimeField(
        auto_now_add=True
    )

    def save(self, *args, **kwargs):
        self.time_accrued = round(self.time_accrued, 2)
        super(OvertimeRequest, self).save(*args, **kwargs)

    # str function - required in Django - knows how to return object as a string
    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""
        return self.email  # Email is unique
