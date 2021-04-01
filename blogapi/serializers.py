from rest_framework import serializers
from .models import Author, Post

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('first_name', 'last_name', 'email','image')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = AuthorSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ('id','title', 'pub_date', 'content','image1','image2','image3','author','externalcontent', 'tags')