from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Credents
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .serializer import CredentsSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view


# Create your views here.
def homeView(request):
    return render(request, './home.html')

class PostListApi(ListAPIView):
    #renderer_classes = (JSONRenderer, )
    queryset = Credents.objects.all()
    serializer_class =  CredentsSerializer



class PostDetailApi(RetrieveAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Credents.objects.all()
    serializer_class = CredentsSerializer


class CredentMainAPIView(APIView):
    #renderer_classes = (JSONRenderer, )

    def get(self, request):
        credents = Credents.objects.all()
        data_credents = {'name': 'credent', 'value': 1}
        return Response(data_credents)

@api_view(['GET'])
def credent_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        credents = Credents.objects.all()
        serializer = CredentsSerializer(credents, many=True)
        print(serializer.data)
        return Response(serializer.data)

