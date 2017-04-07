from django.conf.urls import url, include
from .views import homeView, adress_list,PostDetailApi,credent_list,skill_list
from django.contrib import admin

urlpatterns = [
    url(r'^$', homeView, name="home"),
    #url(r'^api/credents/', PostListApi.as_view(), name="api"),
    #url(r'^api/credents/', CredentMainAPIView.as_view(), name="api"),
    url(r'^api/credents/', credent_list, name="creds"),
    url(r'^api/adress/', adress_list, name="adress"),
    url(r'^api/skills/', skill_list, name="adress"),
    url(r'^(?P<pk>[\d-]+)/', PostDetailApi.as_view(), name="api"),

]
