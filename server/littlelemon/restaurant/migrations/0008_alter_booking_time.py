# Generated by Django 4.2.5 on 2023-09-13 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0007_alter_booking_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='time',
            field=models.SmallIntegerField(default=17),
        ),
    ]
