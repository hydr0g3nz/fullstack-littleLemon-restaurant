from django.db import models

from django.contrib.auth.models import User


# Create your models here.
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    booking_date = models.DateField()
    no_of_guests = models.SmallIntegerField(default=1)
    time = models.SmallIntegerField(default=17)
    table = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.user} {self.booking_date} {self.no_of_guests} {self.time} {self.table}"

    class Meta:
        unique_together = ("booking_date", "time","table")


class Category(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=255, db_index=True)

    def __str__(self) -> str:
        return self.title


class Menu(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    inventory = models.SmallIntegerField()
