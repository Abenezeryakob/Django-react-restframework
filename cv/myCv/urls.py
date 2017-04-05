from django.conf.urls import url, include
from .views import homeView, PostListApi,PostDetailApi,CredentMainAPIView,credent_list
from django.contrib import admin

urlpatterns = [
    url(r'^$', homeView, name="home"),
    #url(r'^api/credents/', PostListApi.as_view(), name="api"),
    #url(r'^api/credents/', CredentMainAPIView.as_view(), name="api"),
    url(r'^api/credents/', credent_list, name="api"),
    url(r'^(?P<pk>[\d-]+)/', PostDetailApi.as_view(), name="api"),

]
