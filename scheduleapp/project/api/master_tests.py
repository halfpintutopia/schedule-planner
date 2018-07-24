# from django.contrib.auth import get_user_model
# from django.urls import reverse
# from rest_framework import status
# from rest_framework.test import APITestCase
# from rest_framework_simplejwt.tokens import RefreshToken
#
# User = get_user_model()  # ? to create test instances using the template of the User from django
#
#
# class MasterTestWrapper:
#     class MasterTests(APITestCase):
#         endpoint = None
#         methods = []
#         kwargs = {}
#
#         def get_url(self, *args, **kwargs):
#             # single * is used to pass a non-keyworded, variable-length argument list,
#             # ** is used to pass a keyworded, variable_length argument list (unpacking?)
#             return reverse(self.endpoint, args=args, kwargs=kwargs)
#
#         def get_kwargs(self):
#             return self.kwargs
#
#         def setUp(self):
#             self.user = User.objects.create_user(
#                 username='test_user',
#                 password='super-secure',
#             )
#             self.refresh = RefreshToken.for_user(self.user)
#             self.access_token = self.refresh.access_token
#
#         def test_authorized_requests(self):
#             url = self.get_url(**self.get_kwargs())
#             for m in self.methods:
#                 try:
#                     method = getattr(self.client, m.lower())
#                     response = method(url)
#                     if response:
#                         self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)
#                 except AttributeError:
#                     raise Exception(f"No such method {m}")
