# from django.contrib.auth import get_user_model
# from rest_framework import status
#
# from project.api.master_tests import MasterTestWrapper
# from project.feed.models import Post
#
# User = get_user_model()
#
#
# class NewPostTest(MasterTestWrapper.MasterTests):
#     endpoint = 'api:create_new'
#     methods = ['POST']
#
#     def setUp(self):
#         super().setUp()  # to be able to access
#         for post in range(3):
#             Post.objects.create(
#                 user=self.user,
#                 content=f"New post created! {post}"
#             )
#
#     def test_post_created(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         url = self.get_url()
#         my_message = "This is a new post"
#         response = self.client.post(url, {"content": my_message})
#         new_posts = Post.objects.all()
#         self.assertEquals(response.status_code, status.HTTP_200_OK)
#         self.assertEquals(new_posts.count(), 4)
#         self.assertEquals(response.data.get('content'), my_message)
#
#     def test_content_empty(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         url = self.get_url()
#         response = self.client.post(url, {"content": ""})
#         self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
#         new_posts = Post.objects.all()
#         self.assertEquals(new_posts.count(), 3)
#         self.assertIn('This field may not be blank.', response.data.get('content'))
#
#     def test_no_content(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         url = self.get_url()
#         response = self.client.post(url)
#         self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
#         new_posts = Post.objects.all()
#         self.assertEquals(new_posts.count(), 3)
#         self.assertIn('This field is required.', response.data.get('content'))
#
#     def test_wrong_content(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         url = self.get_url()
#         response = self.client.post(url, {"id": "1"})
#         self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
#         new_posts = Post.objects.all()
#         self.assertEquals(new_posts.count(), 3)
#         self.assertIn('This field is required.', response.data.get('content'))


# class GetUpdateDeleteTest(MasterTestWrapper.MasterTests):
#     endpoint = 'api:get_update_delete'
#     methods = ['POST']
#
#     def setUp(self):
#         super().setUp()  # to be able to access
#         for post in range(3):
#             Post.objects.create(
#                 user=self.user,
#                 content=f"Another post created! {post}"
#             )
#
#     def test_all(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         url = self.get_url()
#         response = self.client.post(url, '1')
#         self.assertEquals(response.status_code, status.HTTP_200_OK)
#         specific_post = Post.objects.filter('post_id')
#         self.assertEquals(specific_post.count(), '1')
#         self.assertEquals(response.data.get('post_id'), '1')
#
#     # def post_creation(self):
#
#
#     def getting_all_posts(self):
#         self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
#         response = self.client.get(reverse('content'), format="json")
#         self.assertEquals(len(response.data), 1)
