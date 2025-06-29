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

  // Letras acertadas por el jugador
  private letrasCorrectas: Set<string> = new Set();

  // Letras erradas por el jugador
  private letrasIncorrectas: Set<string> = new Set();

  // Número máximo de intentos permitidos
  private intentosMaximos: number = 6;
  /**
 * Reinicia el juego:
 * - Selecciona una nueva palabra al azar.
 * - Limpia las letras acertadas e incorrectas.
 */
  public iniciarNuevoJuego(): void {
    this.seleccionarPalabraAlAzar();
    this.letrasCorrectas.clear();
    this.letrasIncorrectas.clear();
  }

  /**
   * Procesa la letra ingresada por el jugador.
   * - Verifica si ya fue jugada.
   * - La agrega a correctas o incorrectas.
   * - Devuelve true si es correcta, false si no.
   */
  public adivinarLetra(letra: string): boolean {
    letra = letra.toUpperCase();

    // Verificar si ya fue jugada
    if (this.letrasCorrectas.has(letra) || this.letrasIncorrectas.has(letra)) {
      return false;
    }

    // Revisar si la letra está en la palabra secreta
    if (this.palabraSecreta.includes(letra)) {
      this.letrasCorrectas.add(letra);
      return true;
    } else {
      this.letrasIncorrectas.add(letra);
      return false;
    }
  }
  /**
 * Devuelve la palabra secreta con guiones y letras acertadas.
 * Ejemplo: A _ G U _ A _
 */
  public getPalabraConGuiones(): string {
    return this.palabraSecreta
      .split('')
      .map(letra => (this.letrasCorrectas.has(letra) ? letra : '_'))
      .join(' ');
  }

  /**
   * Devuelve las letras incorrectas ingresadas por el jugador.
   */
  public getLetrasIncorrectas(): string[] {
    return Array.from(this.letrasIncorrectas);
  }

  /**
   * Devuelve la cantidad de intentos restantes.
   */
  public getIntentosRestantes(): number {
    return this.intentosMaximos - this.letrasIncorrectas.size;
  }
  /**
   * Verifica si el jugador ganó.
   * Retorna true si todas las letras fueron adivinadas.
   */
  public isGanador(): boolean {
    return this.palabraSecreta
      .split('')
      .every(letra => this.letrasCorrectas.has(letra));
  }

  /**
   * Verifica si el jugador perdió.
   * Retorna true si ya no quedan intentos.
   */
  public isPerdedor(): boolean {
    return this.getIntentosRestantes() <= 0;
  }

}
