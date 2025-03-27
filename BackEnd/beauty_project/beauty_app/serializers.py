from rest_framework.serializers import *
from .models import *

class Cosmetics_Type_Serializer(ModelSerializer):
    class Meta:
        model= Beauty_Types
        fields="__all__"

class Cosmetics_categorie_Serializer(ModelSerializer):
    class Meta:
        model=Beauty_products
        fields="__all__"

class LoginSignup_Serializer(ModelSerializer):
    class Meta:
        model=LoginSignup_process
        fields="__all__"