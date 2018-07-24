# from django.contrib.auth import get_user_model
# # from rest_framework import status
# # from django.urls import reverse, resolve
#
# from project.api.master_tests import MasterTestWrapper
#
# User = get_user_model()
#
# # class TestURLs:
# #
# #     def test_detail_url(self):
# #         path = reverse('get_update_profile', kwargs={'pk': 1})
# #         assert reverse(path).view_name == 'get_update_profile'
#
#
# class EmployeeProfileDisplayTest(MasterTestWrapper.MasterTests):
#     endpoint = 'api.get_update_profile'
#     methods = ['GET', 'POST']
#
#     def setUp(self):
#         superuser = User.objects.create_superuser(
#             'test', 'test@api.com', 'testpassword'
#         )
#         self.user = superuser
#         self.client.login(username=superuser.username, password='testpassword')
