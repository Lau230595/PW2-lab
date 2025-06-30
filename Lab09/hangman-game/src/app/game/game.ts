import { Component, OnInit } from '@angular/core';
import { WordService } from '../word';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class GameComponent implements OnInit {
  alphabet: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  message: string = '';
  juegoFinalizado: boolean = false;
  imageIndex: number = 0; // Para controlar la imagen del ahorcado

  constructor(public wordService: WordService) {}

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    this.wordService.iniciarNuevoJuego();
    this.message = '';
    this.juegoFinalizado = false;
    this.imageIndex = 0; // Reiniciar imagen
  }

  get imagenAhorcado(): string {
    return `assets/images/hangman${this.imageIndex}.png`;
  }

  onGuess(letter: string): void {
    if (this.juegoFinalizado) return;

    const acierto = this.wordService.adivinarLetra(letter);

    if (acierto) {
      this.imageIndex++; // Cambia la imagen por cada acierto
    }

    if (this.wordService.isGanador()) {
      this.message = '¡Ganaste!';
      this.juegoFinalizado = true;
    } else if (this.wordService.isPerdedor()) {
      this.message = `¡Perdiste! La palabra era: ${this.wordService.getPalabraSecreta()}`;
      this.juegoFinalizado = true;
    } else if (!acierto) {
      this.message = '¡Incorrecto!';
    } else {
      this.message = '';
    }
  }

  reiniciarJuego(): void {
    this.iniciarJuego();
  }

  getFigura(intentos: number): string {
    const dibujos = [
    `
        _______
        |/      |
        |
        |
        |
        |
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |
        |
        |
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |       |
        |       |
        |
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |      \\|
        |       |
        |
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |      \\|/
        |       |
        |
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |      \\|/
        |       |
        |      /
        |
      __|__
        `,
    `
        _______
        |/      |
        |      (_)
        |      \\|/
        |       |
        |      / \\
        |
      __|__
        `
    ];
    return dibujos[6 - intentos]; 
  }
}
