from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from .models import DestinosTuristicos
from .forms import DestinoForm
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Historial


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


def agregar_destino(request):
    if request.method == "POST":
        form = DestinoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("index")  # Regresa a la lista principal
    else:
        form = DestinoForm()
    return render(request, "agregar_destino.html", {"form": form})


def editar_destino(request, destino_id):
    destino = get_object_or_404(DestinosTuristicos, id=destino_id)

    if request.method == "POST":
        form = DestinoForm(request.POST, request.FILES, instance=destino)
        if form.is_valid():
            form.save()
            Historial.objects.create(destino=destino.nombreCiudad, accion="Modificado")
        return redirect("index")
    else:
        form = DestinoForm(instance=destino)

    return render(request, "editar_destino.html", {"form": form, "destino": destino})


def nuevo_destino(request):
    if request.method == "POST":
        nombre = request.POST["nombre"]
        descripcion = request.POST["descripcion"]
        imagen = request.FILES.get("imagen")
        precio = request.POST["precio"]
        oferta = "oferta" in request.POST

        destino = DestinosTuristicos(
            nombreCiudad=nombre,
            descripcionCiudad=descripcion,
            imagenCiudad=imagen,
            precioTour=precio,
            ofertaTour=oferta,
        )
        destino.save()
        return redirect("index")
    return render(request, "nuevo_destino.html")


def eliminar_destino(request, destino_id):
    destino = get_object_or_404(DestinosTuristicos, id=destino_id)

    if request.method == "POST":
        Historial.objects.create(destino=destino.nombreCiudad, accion="Eliminado")
        destino.delete()
        return redirect("index")

    return render(request, "eliminar_destino.html", {"destino": destino})


def ver_historial(request):
    historial = Historial.objects.all().order_by("-fecha")
    return render(request, "historial.html", {"historial": historial})
