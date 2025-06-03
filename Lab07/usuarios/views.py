from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import FormularioRegistro

def registro_usuario(request):
    if request.method == 'POST':
        form = FormularioRegistro(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = FormularioRegistro()
    return render(request, 'usuarios/registro.html', {'form': form})

def login_usuario(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('inicio')
        else:
            return render(request, 'usuarios/login.html', {'error': 'Usuario o contraseña inválido'})
    return render(request, 'usuarios/login.html')

def logout_usuario(request):
    logout(request)
    return redirect('login')
