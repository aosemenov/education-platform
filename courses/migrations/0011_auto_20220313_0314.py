# Generated by Django 3.1.14 on 2022-03-13 00:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0010_class_members'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='class',
            options={'permissions': (('can_read', 'Право на просмотр курса'),), 'verbose_name': 'Курс', 'verbose_name_plural': 'Курсы'},
        ),
    ]
