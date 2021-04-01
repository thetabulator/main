from django.urls import include, path,re_path
from django.urls.resolvers import URLPattern
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'Post', views.PostViewSet)
router.register(r'Author', views.AuthorViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('posts/<post_id>/', views.PostList.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]