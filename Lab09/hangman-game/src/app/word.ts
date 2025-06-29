/**
 * Servicio que maneja la lógica del juego del ahorcado.
 * Incluye la lista de palabras y la selección aleatoria.
 * Próximamente se le añadirá el estado del juego.
 */
export class WordService {

  // Lista de palabras posibles para adivinar
  private palabras: string[] = [
    'ANGULAR', 'COMPONENTE', 'SERVICIO', 'TYPESCRIPT', 'JAVASCRIPT',
    'VARIABLE', 'FUNCION', 'INTERFAZ', 'MODULO', 'PLANTILLA'
  ];

  // Palabra actual seleccionada para el juego
  private palabraSecreta: string = '';

  constructor() {
    // Al crear el servicio, podemos elegir la primera palabra automáticamente
    this.seleccionarPalabraAlAzar();
  }

  /**
   * Selecciona una palabra al azar de la lista.
   * La guarda como palabra secreta actual.
   */
  private seleccionarPalabraAlAzar(): void {
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[indice];
  }

  /**
   * Devuelve la palabra secreta actual (para pruebas o depuración).
   */
  public getPalabraSecreta(): string {
    return this.palabraSecreta;
  }
}
