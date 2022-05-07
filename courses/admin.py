from django.contrib import admin
from .models import Course, Class, Groups


@admin.register(Class)
class ClassesAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'href', 'image')


@admin.register(Course)
class CoursesAdmin(admin.ModelAdmin):
    list_display = ('identifier', 'name', 'href')

@admin.register(Groups)
class GroupsAdmin(admin.ModelAdmin):
    list_display = ('name', 'number')
