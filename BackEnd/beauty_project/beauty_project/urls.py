"""
URL configuration for beauty_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path,include
from beauty_app.views import *
from django.conf import settings            
from django.conf.urls.static import static


router=DefaultRouter()
router.register(r'cosmetics',Product_view_data)
router.register(r'serial', Cosmetics_categorie_data)
router.register(r'register',LoginSignup_data)
    

urlpatterns = [                                     
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)), 
    path('filter/<int:id>/',Cosmetics_data_view.as_view()),
   
    
] 
if settings.DEBUG:                        #image view
    urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)