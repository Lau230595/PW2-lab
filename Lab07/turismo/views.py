from django.shortcuts import render
from .models import DestinosTuristicos

def inicio(request):
    destinos = DestinosTuristicos.objects.all()
    return render(request, 'inicio.html', {'destinos': destinos})
