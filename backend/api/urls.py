
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views
from .views import ProductViewSet, UserRegistrationViewSet, RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

router=DefaultRouter()
router.register(r'products',ProductViewSet)
# //router.register(r'register',UserRegistrationViewSet)
urlpatterns = [
  path('',include(router.urls)),
  path('login/',TokenObtainPairView.as_view(),name='login'),
  path('register/',RegisterView.as_view(),name='register'),
  path('refresh/',TokenRefreshView.as_view(),name='')

]