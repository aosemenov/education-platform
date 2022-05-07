from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.views.generic import DetailView
from django.views import generic
from .models import Class
from .permissions import MembersPermissionsMixin
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.template import RequestContext


def home(request):
    if request.user.is_authenticated:
        return redirect('courses:courses_url', permanent=True)
    else:
        if request.method == 'POST':
            username = request.POST.get('USER_LOGIN')
            password = request.POST.get('USER_PASSWORD')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('courses:courses_url', permanent=True)
            else:
                return render(request, 'courses/home.html')
    return render(request, 'courses/home.html')


class CourseListView(LoginRequiredMixin, generic.ListView):
    model = Class
    template_name = 'courses/list.html'
    context_object_name = 'class_list'

    def get_queryset(self):
        return Class.objects.filter(members=self.request.user).order_by('title')


def logoutUser(request):
    logout(request)
    return render(request, 'courses/home.html')


class CourseDetailedView(MembersPermissionsMixin, generic.DetailView):
    model = Class
    template_name = 'courses/detail.html'
    context_object_name = 'class'

class CourseDescriptionView(MembersPermissionsMixin, generic.DetailView):
    model = Class
    template_name = 'courses/detail.html'
    context_object_name = 'class'