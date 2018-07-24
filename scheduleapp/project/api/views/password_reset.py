from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.serializers import RegistrationSerializer

User = get_user_model()


class PasswordResetView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_user = serializer.register_user(
            email=serializer.validated_data.get('email'),
            # **serializer.validated_data,
        )
        return Response(self.get_serializer(new_user).data)  # new user and serialize the user with our own serializer with an email param
