from django.core.mail import send_mail
from django.http import HttpResponse

def index(request):
    send_mail(
        subject='Correo desde Django',
        message='Hola, este es un correo de prueba real enviado desde Django con Gmail.',
        from_email='laluvihu23@gmail.com',
        recipient_list=['lvilcah@unsa.edu.pe'],
        fail_silently=False,
    )
    return HttpResponse("Correo enviado")
