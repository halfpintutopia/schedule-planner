# from django.contrib.auth import get_user_model
# from django.db import models
#
# from django.conf import settings
#
# User = get_user_model()
#
#
# class TimeBack(models.Model):
#     user = models.OneToOneField(
#         verbose_name="user",
#         to=settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name="user_profile",
#     )
#     date_created = models.DateTimeField(
#         auto_now_add=True,
#     )
#     time_accrued = models.FloatField()
#     request_type = models.BooleanField()
#
# class TimeAccruedSerializer(serializer.ModelSerializer):
#     class Meta:
#         model
