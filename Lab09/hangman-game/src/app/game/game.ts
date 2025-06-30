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
  // Finaliza el juego cuando se te acaba los intentos
  juegoFinalizado: boolean = false;

  constructor(public wordService: WordService) {}

  iniciarJuego(): void {
    this.wordService.iniciarNuevoJuego();
    this.message = '';
    this.juegoFinalizado = false;
  }

  ngOnInit(): void {
    // Inicia el juego al cargar el componente
    this.iniciarJuego();
  }

  onGuess(letter: string): void {
    if (this.juegoFinalizado) return; // Bloquear si ya terminó

    const acierto = this.wordService.adivinarLetra(letter);

    if (this.wordService.isGanador()) {
      this.message = '¡Ganaste!';
      this.juegoFinalizado = true; // Marcar juego como terminado
    } else if (this.wordService.isPerdedor()) {
      this.message = `¡Perdiste! La palabra era: ${this.wordService.getPalabraSecreta()}`;
      this.juegoFinalizado = true; // Marcar juego como terminado
    } else if (!acierto) {
      this.message = '¡Incorrecto!';
    } else {
      this.message = '';
    }
  }

  reiniciarJuego(): void {
    this.iniciarJuego();
    this.message = '';
    this.juegoFinalizado = false;
  }
}
