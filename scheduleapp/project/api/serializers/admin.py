from rest_framework import serializers

from project.employee_personal.models import EmployeePersonalProfile


class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(
        label="E-mail address"
    )

    def validate_email(self, value):
        try:
            EmployeePersonalProfile.objects.get(email=value)
            raise serializers.ValidationError(
                "User with this email address already exists"
            )
        except EmployeePersonalProfile.DoesNotExist:
            return value
