from django.db import models
from django.utils import timezone

class DestinosTuristicos(models.Model):
    nombreCiudad = models.CharField(max_length=100)
    descripcionCiudad = models.TextField()
    imagenCiudad = models.ImageField(upload_to='imagenes/', null=True, blank=True)
    precioTour = models.DecimalField(max_digits=10, decimal_places=2)
    ofertaTour = models.BooleanField(default=False)

    def __str__(self):
        return self.nombreCiudad
    
class Historial(models.Model):
    destino = models.CharField(max_length=100)
    accion = models.CharField(max_length=50)  # "Modificado", "Eliminado", etc.
    fecha = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.destino} - {self.accion} - {self.fecha.strftime('%Y-%m-%d %H:%M')}"