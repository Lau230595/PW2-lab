from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render

def enviar_email(request):
    if request.method == 'POST':
        to_email = request.POST.get('to_email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        send_mail(
            subject=subject,
            message=message,
            from_email='laluvihu23@gmail.com',  # tu correo verificado
            recipient_list=[to_email],
            fail_silently=False,
        )

        return HttpResponse("Correo enviado correctamente.")
    
    return render(request, 'email_form.html')
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

