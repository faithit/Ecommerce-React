
from .models import Product, UserRegistration
from .serializers import productSerializer, UserRegistrationSerializer, RegisterSerializer
from rest_framework.permissions import BasePermission, IsAuthenticated,SAFE_METHODS
from rest_framework import generics,viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
# @api_view(['GET'])
# def product_list(request):
#     products = Product.objects.all()
#     serilizer =productSerializer(products, many=True)
#     return Response(serilizer.data)
from rest_framework import viewsets
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class =productSerializer
class UserRegistrationViewSet(viewsets.ModelViewSet):
    queryset = UserRegistration.objects.all()
    serializer_class =UserRegistrationSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = []
    queryset = []

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_staff

@api_view(['GET'])
def get_user(request):
    return Response({
        'username': request.user.username,
        'is_staff': request.user.is_staff
    })