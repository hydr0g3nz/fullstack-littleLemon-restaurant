from django.urls import path,include
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from restaurant.views import BookingViewSet,CategoryViewSet,MenuViewSet,UserViewSet

router1 = DefaultRouter()
router1.register(r"tables", BookingViewSet, basename="tables")

router2 = DefaultRouter()
router2.register(r'menu',MenuViewSet,basename='menus')

router3 = DefaultRouter()
router3.register(r'users', UserViewSet, basename='user')
router4 = DefaultRouter()
router4.register(r'category', CategoryViewSet, basename='category')

urlpatterns = [
 
    path("booking/", include(router1.urls)),
    path("",include(router2.urls)),
    path('', include(router3.urls)),
    path('',include(router4.urls))
]
