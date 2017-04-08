from django.conf.urls import url, include
from .views import (homeView, adress_list,education_list_view,
                    PostDetailApi,credent_list,
                    skill_list,skill_filter_list,
                    )

urlpatterns = [
    url(r'^$', homeView, name="home"),
    #url(r'^api/credents/', PostListApi.as_view(), name="api"),
    #url(r'^api/credents/', CredentMainAPIView.as_view(), name="api"),
    url(r'^api/credents/', credent_list, name="creds"),
    url(r'^api/adress/', adress_list, name="adress"),
    url(r'^api/skills/', skill_list, name="skill"),
    url(r'^api/education/', education_list_view, name="skill"),
    url(r'^api/skillfilter/(?P<skills_type>.*)/', skill_filter_list, name="filter"),
    url(r'^api/(?P<pk>[\d-]+)/', PostDetailApi.as_view(), name="api"),
]
