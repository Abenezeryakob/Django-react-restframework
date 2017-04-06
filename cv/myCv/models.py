from django.db import models

# Create your models here.

class Credents(models.Model):

    title = models.CharField(max_length=70, null=True, blank=True)
    site = models.CharField(max_length=70, null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=True)
    def __str__(self):
        return self.title


class Adress(models.Model):

    name = models.CharField(max_length=150, null=True, blank=True)
    street = models.CharField(max_length=150, null=True, blank=True)
    post = models.CharField(max_length=150, null=True, blank=True)
    phone = models.CharField(max_length=150, null=True, blank=True)
    email = models.CharField(max_length=150, null=True, blank=True)
    def __str__(self):
        return self.street
