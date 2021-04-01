from django.db import models
import uuid
# Create your models here.
class Author(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    image = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True)

    def __str__(self):
        return '%s %s %s %s'%(self.last_name,self.first_name,self.email,self.image)

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    pub_date = models.DateField()
    content = models.TextField()
    externalcontent = models.CharField(max_length=100, null=True, blank=True)
    image1 = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True)
    image2 = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True)
    image3 = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True)
    author = models.ManyToManyField(Author)
    US = 'US'
    WORLD = 'World'
    HEALTH = 'Health'
    AGRICULTURE = 'Agriculture'
    FINANCE = 'Finance'
    MILITARY = 'Military'
    CULTURE = 'Culture'
    POLITICS = 'Politics'
    TRADE = 'Trade'
    TAG_CHOICES = [
        (US, 'us'),
        (WORLD, 'world'),
        (HEALTH, 'health'),
        (AGRICULTURE, 'agriculture'),
        (FINANCE, 'finance'),
        (MILITARY, 'military'),
        (CULTURE, 'culture'),
        (POLITICS, 'politics'),
        (TRADE, 'trade')
    ]
    tags = models.CharField(
        max_length=12,
        choices=TAG_CHOICES,
        default=WORLD
    )
    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']