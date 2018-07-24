from django.contrib.auth.models import User
from django.test import TestCase, Client


class UserAPITestCase(TestCase):
    """
    Create user API
    """

    def setup(self):
        self.c = Client()

        self.normal_user = User.objects.create_user(
            username="sam", password="password", email="sam@test.com"
        )
        self.superuser = User.objects.create_superuser(
            username="kevin", password="supersecret", email="kevin@test.com"
        )
