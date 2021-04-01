from django.contrib import admin
from .models import Post, Author
# Register your models here.
admin.site.site_header = "Tabulator"
admin.site.register(Post)
admin.site.register(Author)