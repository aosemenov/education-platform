# Generated by Django 3.1.14 on 2022-03-09 17:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_auto_20220309_2027'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Classes',
            new_name='Class',
        ),
        migrations.RenameModel(
            old_name='Courses',
            new_name='Course',
        ),
        migrations.AlterModelOptions(
            name='class',
            options={'verbose_name': 'Class', 'verbose_name_plural': 'Classes'},
        ),
    ]
