from .models import Product, UserRegistration
from rest_framework import serializers
from django.contrib.auth.models import User

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UserRegistrationSerializer(serializers.ModelSerializer):
     confirm_password = serializers.CharField(write_only=True)

     class Meta:
         model=UserRegistration
         fields = '__all__'


     confirm_password = serializers.CharField(write_only=True)
     def validate(self, data):
         if data['password'] != data['confirm_password']:
             raise serializers.ValidationError("Passwords do not match.")
         return data

     def create(self, validated_data):
         validated_data.pop('confirm_password')  # Remove confirm_password before saving
         return super().create(validated_data)
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'username','email','password','is_staff'
        extra_kwargs = {
                        'password': {'write_only':True},
                        'is_staff': {'read_only':True}
        }
        def create(self, validated_data):
            return User.objects.create_user(**validated_data)