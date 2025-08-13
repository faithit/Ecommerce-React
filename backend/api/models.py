from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models. URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class UserRegistration(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField()
    phone=models.CharField(max_length=15)
    password = models.CharField(max_length=100)
    gender= models.CharField(max_length=10 ,choices=[('Male', 'Male'), ('Female', 'Female')])


    def __str__(self):
        return self.full_name