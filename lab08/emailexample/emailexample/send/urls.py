from django.urls import path
from . import views

urlpatterns = [
    path('', views.lab08_home, name='lab08_home'),
    path('uno-a-muchos/', views.uno_a_muchos, name='uno_a_muchos'),
    path('muchos-a-muchos/', views.muchos_a_muchos, name='muchos_a_muchos'),
    path('generar-pdf/', views.generar_pdf, name='generar_pdf'),
    path('enviar-email/', views.enviar_email, name='enviar_email'),
]