import { Component, OnInit } from '@angular/core';
import { WordService } from '../word'; // Importación del servicio

@Component({
  selector: 'app-game',
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class GameComponent implements OnInit {
  alphabet: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  message: string = '';

  constructor(public wordService: WordService) {}

  ngOnInit(): void {
    this.wordService.restart(); // Inicia el juego al cargar el componente
  }

  onGuess(letter: string): void {
    this.wordService.guessLetter(letter);

    if (this.wordService.hasWon()) {
      this.message = '¡Ganaste!';
    } else if (this.wordService.hasLost()) {
      this.message = `¡Perdiste! La palabra era: ${this.wordService.secretWord}`;
    }
  }

  reiniciarJuego(): void {
    this.wordService.restart();
    this.message = '';
  }
}
