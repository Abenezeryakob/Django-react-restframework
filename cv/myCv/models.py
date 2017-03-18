from django.db import models

# Create your models here.

class Credents(models.Model):

    title = models.CharField(max_length=70, null=True, blank=True)
    site = models.CharField(max_length=70, null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=True)

    def __str__(self):
        return self.title


