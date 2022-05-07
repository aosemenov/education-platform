from django.http import HttpResponse
from django.shortcuts import redirect

def redirect_home(request):
    return redirect('courses:home_url', permanent=True)