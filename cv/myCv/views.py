from django.shortcuts import render
from rest_framework.generics import  RetrieveAPIView
from .models import Credents,Adress,Skills
from rest_framework.permissions import IsAuthenticated

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .serializer import CredentsSerializer, AdressSerializer ,SkilsSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view,renderer_classes

from django.contrib.auth.models import User
from rest_framework import generics
# Create your views here.
def homeView(request):
    return render(request, './home.html')



class PostDetailApi(RetrieveAPIView):
    #renderer_classes = (JSONRenderer, )
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

@api_view(['GET'])
def skill_list(request):
    """
    List Adress,
    """
    if request.method == 'GET':
        skills = Skills.objects.all()
        skill_serializer = SkilsSerializer(skills, many=True)
        return Response(skill_serializer.data)

@api_view(['GET'])
def skill_filter_list(request, skills_type):
    """
    List Adress,

    """
    print(skills_type)
    if request.method == 'GET':
        skills = Skills.objects.filter(type=skills_type)
        skill_serializer = SkilsSerializer(skills, many=True)
        return Response(skill_serializer.data)
class SkillDetailApi(RetrieveAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkilsSerializer


class SkillFilterAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    #renderer_classes = (JSONRenderer,)
    def get(self, request, skills_type):
        print(type(skills_type),'*****************************************')
        available_filters = Skills.objects.filter(type=str(skills_type))
        return Response(available_filters)
