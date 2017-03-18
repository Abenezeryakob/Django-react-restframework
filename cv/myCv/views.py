from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Credents
from .serializer import CredentsSerializer

# Create your views here.
def homeView(request):
    return render(request, './home.html')

class PostListApi(ListAPIView):
    queryset = Credents.objects.all()
    serializer_class =  CredentsSerializer

class PostDetailApi(RetrieveAPIView):
    queryset = Credents.objects.all()
    serializer_class = CredentsSerializer
