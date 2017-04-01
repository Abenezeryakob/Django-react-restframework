from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Credents
from .serializer import CredentsSerializer
from rest_framework.views import APIView

# Create your views here.
def homeView(request):
    return render(request, './home.html')

class PostListApi(ListAPIView):
    queryset = Credents.objects.all()
    serializer_class =  CredentsSerializer

class PostDetailApi(APIView):
    queryset = Credents.objects.all()
    serializer_class = CredentsSerializer

