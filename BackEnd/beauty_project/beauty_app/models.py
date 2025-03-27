from django.db import models

# Create your models here.

class Beauty_Types(models.Model):
    product_type=models.CharField(max_length=100)
    product_name=models.CharField(max_length=50)


class Beauty_products(models.Model):
    Beauty_caterogy_type=models.ForeignKey(Beauty_Types,null=True,on_delete=models.SET_NULL)
    product_caterogy=models.CharField(max_length=100,null=True)
    product_image=models.ImageField(null=True)
    product_name=models.CharField(max_length=100)
    product_price=models.IntegerField(null=0)

class LoginSignup_process(models.Model):
    user_name=models.CharField(max_length=100)
    user_email=models.EmailField(max_length=50)
    user_password=models.CharField(max_length=100)