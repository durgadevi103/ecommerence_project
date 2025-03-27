from rest_framework.viewsets import *
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView

class Product_view_data(ModelViewSet):
    queryset=Beauty_Types.objects.all()
    serializer_class=Cosmetics_Type_Serializer

class Cosmetics_categorie_data(ModelViewSet):
    queryset=Beauty_products.objects.all()
    serializer_class=Cosmetics_categorie_Serializer

class Cosmetics_data_view(APIView):
    def get(self,request,id):
        categories=Beauty_products.objects.filter(Beauty_caterogy_type=id)
        json_data=Cosmetics_categorie_Serializer(categories,many=True).data
        return Response(json_data)


class LoginSignup_data(ModelViewSet):
    queryset=LoginSignup_process.objects.all()
    serializer_class=LoginSignup_Serializer


