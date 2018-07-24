from django.urls import path, include
# from rest_framework import views
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView)

from project.api.views.admin import RegisterEmployeeView
from project.api.views.employees import GetAllEmployeesView, GetUpdateEmployeePersonalProfileView, GetEmployeeView, \
    EmployeeProfileViewSet, UserProfileViewSet
from project.api.views.hello_world import HelloAPIView, HelloViewSet
from project.api.views.me import GetUpdateProfileView

app_name = "api"

router = DefaultRouter()
router.register("hello-viewset", HelloViewSet, base_name='hello-viewset')
router.register("profile", EmployeeProfileViewSet, base_name="profile")
router.register("testprofile", UserProfileViewSet, base_name="test-profile")

urlpatterns = [
    path('hello-world/', HelloAPIView.as_view(), name='hello_world'),
    path('me/', GetUpdateProfileView.as_view(), name='get_update_profile'),
    path('myprofile/', GetUpdateEmployeePersonalProfileView.as_view(), name='profile'),

    path('profiles/list/', GetAllEmployeesView.as_view(), name='get_all_employees'),
    path('profiles/search/<int:user_id>/', GetEmployeeView.as_view(), name='get_employee'),
    path('addprofile/', RegisterEmployeeView.as_view(), name='register_employee'),
    # path('request/'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Get a new JWT by passing username and password
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Get a new JWT by passing an old still valid JWT
    path('auth/token/verify', TokenVerifyView.as_view(), name='token-verify'),
    # Verify a token by passing the token in the body
    path('', include(router.urls)),
]
