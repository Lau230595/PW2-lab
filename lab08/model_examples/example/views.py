from .models import Language
from .models import Character
from django.shortcuts import render

def uno_a_muchos(request):
    languages = Language.objects.prefetch_related('framework_set').all()
    return render(request, 'uno_a_muchos.html', {'languages': languages})


def muchos_a_muchos(request):
    personajes = Character.objects.prefetch_related('movies').all()
    return render(request, 'muchos_a_muchos.html', {'personajes': personajes})