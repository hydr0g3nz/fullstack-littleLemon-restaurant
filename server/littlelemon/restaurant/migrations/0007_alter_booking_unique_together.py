# Generated by Django 4.2.5 on 2023-09-13 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0006_alter_booking_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='booking',
            unique_together=set(),
        ),
    ]