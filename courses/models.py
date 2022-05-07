import uuid

from django.contrib.auth.models import User
from django.urls import reverse
from django.db import models
from django.views import generic

class Class(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True, verbose_name='Название курса')
    class_id = models.CharField(primary_key=False, default=uuid.uuid4, max_length=200,
                          help_text="Уникальный ID курса")
    description = models.TextField(max_length=2000, blank=True, null=True, verbose_name='Описание')
    href = models.CharField(max_length=200, blank=True, null=True, verbose_name='Ссылка на страницу курса')
    classes = models.ManyToManyField('Course', related_name='classes_set', blank=True, null=True, verbose_name='Специальные дисциплины курса')
    general_classes = models.ManyToManyField('Course', related_name='classes_general_set', blank=True, verbose_name='Общие дисциплины курса')
    image = models.ImageField(blank=True, upload_to='images/class/%Y/%m/%d',
                              verbose_name='Картинка')
    date = models.DateField(blank=True, null=True, verbose_name='Дата создания курса')
    members = models.ManyToManyField(User, verbose_name='Участники', blank=True)
    groups = models.ForeignKey('Groups', on_delete=models.CASCADE, verbose_name='Присоединенные группы', blank=True, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('courses:course_detail_url', args=[str(self.id)])

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
        permissions = (("can_read", "Право на просмотр курса"),)



class Groups(models.Model):
    name = models.CharField(max_length=15, blank=False, null=False)
    number = models.CharField(max_length=15, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'


class Course(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True)
    identifier = models.CharField(max_length=128, blank=True, null=False)
    description = models.TextField(max_length=2000, blank=True, null=True, verbose_name='Описание')
    href = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(blank=True, upload_to='images/course/%Y/%m/%d',
                              verbose_name='Картинка дисциплины')

    def __str__(self):
        return self.identifier

    class Meta:
        verbose_name = 'Дисциплина'
        verbose_name_plural = 'Дисциплины'