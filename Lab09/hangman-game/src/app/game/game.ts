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

  constructor(public wordService: WordService) {}

  ngOnInit(): void {
    // Inicia el juego al cargar el componente
    this.wordService.iniciarNuevoJuego();
  }

  onGuess(letter: string): void {
    const acierto = this.wordService.adivinarLetra(letter);

    if (this.wordService.isGanador()) {
      this.message = '¡Ganaste!';
    } else if (this.wordService.isPerdedor()) {
      this.message = `¡Perdiste! La palabra era: ${this.wordService.getPalabraSecreta()}`;
    } else if (!acierto) {
      this.message = '¡Incorrecto!';
    } else {
      this.message = '';
    }
  }

  reiniciarJuego(): void {
    this.wordService.iniciarNuevoJuego();
    this.message = '';
  }
}
