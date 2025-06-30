import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/question', 0]);
  }
}
