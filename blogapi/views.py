from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .serializers import PostSerializer, AuthorSerializer
from .models import Author, Post
from django_filters.rest_framework import DjangoFilterBackend
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('title')
    serializer_class = PostSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['tags']
    
class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by('last_name')
    serializer_class = AuthorSerializer

class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    

    def get_queryset(self):
        queryset = Post.objects.filter(pk=self.kwargs['post_id'])
        return queryset
