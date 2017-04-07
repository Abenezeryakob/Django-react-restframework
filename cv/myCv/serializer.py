from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Credents,Adress
from rest_framework.response import Response

class CredentsSerializer(ModelSerializer):

    class Meta:
        model = Credents
        fields = ['id','title','name','site','text','fromdate','todate']

class AdressSerializer(ModelSerializer):
    class Meta:
        model = Adress
        fields = ['name','street','post','phone','email']
