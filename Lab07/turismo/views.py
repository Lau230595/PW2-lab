from django.shortcuts import render, redirect, get_object_or_404
from .models import DestinosTuristicos
from .forms import DestinoForm

def inicio(request):
    destinos = DestinosTuristicos.objects.all()
    return render(request, 'inicio.html', {'destinos': destinos})

def listar_destinos(request):
    destinos = DestinosTuristicos.objects.all()
    return render(request, 'turismo/listar.html', {'destinos': destinos})

def crear_destino(request):
    if request.method == 'POST':
        form = DestinoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('listar_destinos')
    else:
        form = DestinoForm()
    return render(request, 'turismo/formulario.html', {'form': form, 'accion': 'Crear'})

def editar_destino(request, id):
    destino = get_object_or_404(DestinosTuristicos, id=id)
    if request.method == 'POST':
        form = DestinoForm(request.POST, request.FILES, instance=destino)
        if form.is_valid():
            form.save()
            return redirect('listar_destinos')
    else:
        form = DestinoForm(instance=destino)
    return render(request, 'turismo/formulario.html', {'form': form, 'accion': 'Editar'})

def eliminar_destino(request, id):
    destino = get_object_or_404(DestinosTuristicos, id=id)
    destino.delete()
    return redirect('listar_destinos')