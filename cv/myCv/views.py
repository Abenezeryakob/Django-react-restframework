from django.shortcuts import render
from rest_framework.generics import  RetrieveAPIView
from .models import Credents,Adress
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .serializer import CredentsSerializer, AdressSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view


# Create your views here.
def homeView(request):
    return render(request, './home.html')



class PostDetailApi(RetrieveAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Credents.objects.all()
    serializer_class = CredentsSerializer



@api_view(['GET'])
def credent_list(request):
    """
    List all Creds,
    """
    if request.method == 'GET':
        credents = Credents.objects.all()
        serializer = CredentsSerializer(credents, many=True)
        return Response(serializer.data)
@api_view(['GET'])
def adress_list(request):
    """
    List Adress,
    """
    if request.method == 'GET':
        adress = Adress.objects.all()
        adress_serializer = AdressSerializer(adress, many=True)
        return Response(adress_serializer.data)

