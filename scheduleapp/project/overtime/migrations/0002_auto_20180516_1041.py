# Generated by Django 2.0.5 on 2018-05-16 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0001_initial'),
        ('overtime', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Overtime',
            new_name='OvertimeRequest',
        ),
    ]