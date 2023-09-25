from django.contrib import admin
from .models import Booking,Menu,Category
# Register your models here.
admin.site.register(Booking)
admin.site.register(Menu)
admin.site.register(Category)