from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken

from project.api.permissions import UpdateOwnProfile
from project.api.serializers.employees import EmployeeUpdateProfileSerializer, \
    EmployeeProfileSerializer
from project.employee_contract.models import EmployeeContractProfile
from project.employee_personal.models import EmployeePersonalProfile


# @route    GET/POST api/profile
# @desc     Create, read and update personal employee profile
# @access   Private
class EmployeeProfileViewSet(ModelViewSet):
    authentication_classes = (
        TokenAuthentication,
    )
    permission_classes = (
        UpdateOwnProfile,
    )
    filter_backends = (
        filters.SearchFilter,
    )

    serializer_class = EmployeeProfileSerializer
    queryset = EmployeePersonalProfile.objects.all()
    # serializer = EmployeeProfileSerializer(queryset, many=True)
    search_fields = ("first_name", "last_name", "email",)


# @route    POST api/login
# @desc     Checks email and password returns auth token
# @access   Private
class LoginViewSet(ViewSet):
    serializer_class = AuthTokenSerializer

    def create(self, request):
        """Use the ObtainAuthToken APIView to validate and create a token"""

        return ObtainAuthToken().post(request)


# @route    GET/POST/DELETE api/profile
# @desc     Get, update and delete personal employee profile
# @access   Private
class GetUpdateEmployeePersonalProfileView(GenericAPIView):
    serializer_class = EmployeeUpdateProfileSerializer
    serializer_class_output = EmployeeProfileSerializer
    permission_classses = [
        IsAuthenticated,
    ]

    def get(self, request):
        serializer = self.serializer_class_output(request.user)
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context={
                'request': request
            },
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.save(serializer.validated_data)
        return Response(self.serializer_class_output(user).data)


class UserProfileViewSet(ModelViewSet):
    """Handles creating, reading and updating profiles"""

    serializer_class = EmployeeProfileSerializer
    queryset = EmployeePersonalProfile.objects.all()


# @route    GET api/profiles/list
# @desc     Get all employees
# @access   Private
class GetAllEmployeesView(APIView):
    serializer_class = EmployeeProfileSerializer
    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]

    def get(self, request):
        return Response(EmployeeProfileSerializer(EmployeePersonalProfile.objects.all()).data)


# @route    GET api/profiles/<int:user_id>
# @desc     Get a specific employee profile
# @access   Private
class GetEmployeeView(APIView):
    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]

    def get(self, user_id):
        return Response(EmployeeProfileSerializer(EmployeeContractProfile.objects.filter(user_id)).data)
