# Generated by Django 3.1.14 on 2022-03-11 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_auto_20220309_2029'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='image',
            field=models.ImageField(blank=True, help_text='150x150px', upload_to='images/class/%Y/%m/%d', verbose_name='Ссылка картинки'),
        ),
    ]
