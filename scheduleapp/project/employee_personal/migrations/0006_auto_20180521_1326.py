# Generated by Django 2.0.5 on 2018-05-21 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee_personal', '0005_employeepersonalprofile_last_login'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeepersonalprofile',
            name='password',
            field=models.CharField(max_length=255),
        ),
    ]
