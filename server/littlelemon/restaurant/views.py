from rest_framework import viewsets, permissions, status
from .models import Booking, Menu, Category
from .serializers import (
    BookingSerializer,
    CategorySerializer,
    CustomUserSerializer,
    MenuSerializer,
)
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import action, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["username"] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class BookingViewSet(viewsets.ViewSet):
    # permission_classes = []
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        serializer = BookingSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = []

    def list(self, request):
        date = request.query_params.get("date")
        bookings = Booking.objects.all()
        if date:
            bookings = bookings.filter(booking_date=date)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def user(self, request):
        date = request.query_params.get("date")

        bookings = Booking.objects.filter(user=request.user)
        if date:
            bookings = bookings.filter(booking_date=date)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)


class MenuViewSet(viewsets.ViewSet):
    # permission_classes=[permissions.IsAuthenticated]
    

    def create(self, request):
        
        if self.request.user.is_superuser == False:
            if self.request.user.groups.filter(name="Manager").exists() == False:
                return Response({"message": "forbidden"}, status.HTTP_403_FORBIDDEN)
            
        serializer = MenuSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        menu = Menu.objects.all()
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        menus = Menu.objects.all()
        menu = get_object_or_404(menus, pk=pk)
        serializer = MenuSerializer(menu)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            menu = Menu.objects.get(pk=pk)
        except Menu.DoesNotExist:
            return Response(
                {"message": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = MenuSerializer(menu, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            menu = Menu.objects.get(pk=pk)
        except Menu.DoesNotExist:
            return Response({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserViewSet(viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=["post"])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        data = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }
        return Response(data, status=status.HTTP_201_CREATED)


class CategoryViewSet(viewsets.ViewSet):
    def list(self, request):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)
