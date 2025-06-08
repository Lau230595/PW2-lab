from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login/", views.login_view, name="login"),
    path("register/", views.register_view, name="register"),
    path("logout/", views.logout_view, name="logout"),
    path('agregar/', views.agregar_destino, name='agregar_destino'),
    path('nuevo/', views.nuevo_destino, name='nuevo_destino'),
    path('editar/<int:destino_id>/', views.editar_destino, name='editar_destino'),
    path('eliminar/<int:destino_id>/', views.eliminar_destino, name='eliminar_destino'),
    path('historial/', views.ver_historial, name='historial'),
]
