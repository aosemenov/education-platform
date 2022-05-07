from .views import *
from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path

admin.autodiscover()

app_name = 'courses'

urlpatterns = [
    path('', home, name='home_url'),
    path('courses/', CourseListView.as_view(), name="courses_url"),
    path('course/<str:pk>/', CourseDetailedView.as_view(), name="course_detail_url"),
    path('logout/', logoutUser, name="logout_url"),
]
