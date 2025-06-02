from django.shortcuts import render
from .models import DestinosTuristicos

def index(request):
    destinos = DestinosTuristicos.objects.all()
    return render(request, 'index.html', {'destinos': destinos})
