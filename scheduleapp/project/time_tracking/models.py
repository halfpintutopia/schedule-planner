from django.db import models

from project.request.models import Request


class TimeTracker(models.Model):
    request = models.ForeignKey(
        Request,
        verbose_name="request",
        # to="request.Request",
        on_delete=models.CASCADE,
    )
    time_accrued = models.FloatField()
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

    def save(self, *args, **kwargs):
        self.time_accrued = round(self.time_accrued, 2)
        super(TimeTracker, self).save(*args, **kwargs)

    # user = models.ForeignKey(
    #
    # )
    # project = models.ForeignKey(
    #
    # )
    # activity = models.ForeignKey(
    #
    # )
    # location = models.ForeignKey(
    #
    # )
    # status = models.ForeignKey(
    #
    # )
    # start_time = models.DateTimeField(
    #     auto_now_add=True,
    # )
    # end_time = models.DateTimeField(
    #     auto_now_add=True,
    # )
    # seconds_paused = models.TimeField(
    #
    # )
    # pause_time = models.TimeField(
    #     default=None,
    # )
    # hours = models.TimeField(
    #
    # )
