from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from project.api.serializers.admin import RegistrationSerializer
from project.api.serializers.employees import EmployeeProfileSerializer


# @route    POST api/addprofile/
# @desc     Post, add a new profile
# @access   Private
class RegisterEmployeeView(GenericAPIView):
    permission_classes = [
        IsAdminUser,
    ]
    serializer_class = RegistrationSerializer
    output_serializer_class = EmployeeProfileSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_employee = serializer.register_employee(
            email=serializer.validated_data.get("email")
        )
        return Response(self.output_serializer_class(new_employee).data)
