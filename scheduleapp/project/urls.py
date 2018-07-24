from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('project.api.urls', namespace='api')),  # to avoid conflicts namespace api
    path('docs/', include_docs_urls(title='Django Social App', public=False)),
]
