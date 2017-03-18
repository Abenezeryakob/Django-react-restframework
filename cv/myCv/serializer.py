from rest_framework.serializers import ModelSerializer
from .models import Credents

class CredentsSerializer(ModelSerializer):
    class Meta:
        model = Credents
        fields = ['id','title','site','text','date']
