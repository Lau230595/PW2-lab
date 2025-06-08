from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .models import DestinosTuristicos

def index(request):
    destinos = DestinosTuristicos.objects.all()
    return render(request, "index.html", {"destinos": destinos})

# FORMULARIO DE REGISTRO
def register_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        # Verificar si ya existe el usuario
        if User.objects.filter(username=username).exists():
            return render(request, "register.html", {"error": "El usuario ya existe"})
        
        # Crear usuario
        user = User.objects.create_user(username=username, password=password)
        return redirect("login")  # redirigir al login después del registro

    return render(request, "register.html")


# FORMULARIO DE LOGIN
def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return redirect("index")  # página principal
        else:
            return render(request, "login.html", {"error": "Credenciales inválidas"})

    return render(request, "login.html")


# CERRAR SESIÓN
def logout_view(request):
    logout(request)
    return redirect("login")
