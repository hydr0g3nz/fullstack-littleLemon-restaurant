# Generated by Django 4.2.4 on 2023-09-12 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_menu'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='time',
            field=models.CharField(choices=[(17, 17), (18, 18), (19, 19), (20, 20)], default=1, max_length=1),
            preserve_default=False,
        ),
    ]
