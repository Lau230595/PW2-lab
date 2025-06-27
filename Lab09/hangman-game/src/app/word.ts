export class WordService {
  private words: string[] = [
    'ANGULAR', 'COMPONENTE', 'SERVICIO', 'TYPESCRIPT', 'JAVASCRIPT',
    'VARIABLE', 'FUNCION', 'INTERFAZ', 'MODULO', 'PLANTILLA'
  ];

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
}
