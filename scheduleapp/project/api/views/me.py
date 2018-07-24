from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.permissions import UpdateOwnProfile
from project.api.serializers.employees import EmployeeUpdateProfileSerializer, EmployeeProfileSerializer


# @route   GET/POST api/me
# @desc    Get and update user profile
# @access  Public
class GetUpdateProfileView(GenericAPIView):
    serializer_class = EmployeeUpdateProfileSerializer
    serializer_class_output = EmployeeProfileSerializer
    permission_classes = [
        UpdateOwnProfile,
    ]

    def get(self, request):
        serializer = EmployeeProfileSerializer(request.user.employee_profile)
        return Response(serializer.data)

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context={
                'request': request
            },
        )
        serializer.is_valid(raise_exception=True)
        employee = serializer.save(serializer.validated_data)
        return Response(self.serializer_class_output(employee).data)
