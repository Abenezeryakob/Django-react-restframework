from django.conf.urls import url, include
from .views import homeView
from django.contrib import admin

urlpatterns = [
    url(r'^', homeView, name="home")
]
