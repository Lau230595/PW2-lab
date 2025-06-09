from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    send_mail(
        subject='Correo desde Django',
        message='Hola, este es un correo de prueba real enviado desde Django con Gmail.',
        from_email='laluvihu23@gmail.com',
        recipient_list=['lvilcah@unsa.edu.pe'],
        fail_silently=False,
    )
    return HttpResponse("Correo enviado")

# Página principal del laboratorio
def lab08_home(request):
    return render(request, 'lab08_home.html')

# Vista 1: Relación uno a muchos (solo ejemplo estático)
def uno_a_muchos(request):
    return HttpResponse("Ejemplo: Relación Uno a Muchos")

# Vista 2: Relación muchos a muchos (solo ejemplo estático)
def muchos_a_muchos(request):
    return HttpResponse("Ejemplo: Relación Muchos a Muchos")

# Vista 3: Generación de PDF (simulación básica)
def generar_pdf(request):
    return HttpResponse("Aquí se generaría un PDF")

# Vista 4: Enviar email (simulación básica)
def enviar_email(request):
    return HttpResponse("Aquí se enviaría un correo electrónico")