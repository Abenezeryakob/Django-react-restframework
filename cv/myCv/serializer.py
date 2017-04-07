from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Credents, Adress, Skills, About, Education
from rest_framework.response import Response

class CredentsSerializer(ModelSerializer):

    class Meta:
        model = Credents
        fields = ['id','title','name','site','text','fromdate','todate']

class AdressSerializer(ModelSerializer):
    class Meta:
        model = Adress
        fields = ['name','street','post','phone','email']

class SkilsSerializer(ModelSerializer):
    class Meta:
        model = Skills
        fields = ['id','type','grade','name','img']
