from django.contrib.auth import get_user_model
from rest_framework import serializers

# from project.employee_contract.models import EmployeeContractProfile
from project.employee_personal.models import EmployeePersonalProfile

User = get_user_model()

"""ModelSerializers are designed to be used with models and have built in functionalities"""


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'is_superuser']


class EmployeeProfileSerializer(serializers.ModelSerializer):
    """A serializer for our user profile objects"""
    user = UserSerializer()

    # what fields we want to use in our model
    class Meta:
        model = EmployeePersonalProfile
        fields = (
            'id', 'user',
            'avatar', 'country', 'street_and_number',
            'county', 'postcode', 'phone_number')
        # define extra keyword to protect our password
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        employee = EmployeePersonalProfile(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"]
        )

        employee.set_password(validated_data["password"])
        employee.save()

        return employee


class EmployeeUpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeePersonalProfile
        fields = ('id', 'street_and_number', 'city', 'country', 'postcode', 'avatar')
