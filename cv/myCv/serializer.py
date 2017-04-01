from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Credents
from rest_framework.response import Response

class CredentsSerializer(ModelSerializer):


    class Meta:
        model = Credents
        fields = ['id','title','site','text','date']
