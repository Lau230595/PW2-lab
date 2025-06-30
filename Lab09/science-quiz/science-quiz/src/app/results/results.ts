import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrls: ['./results.css'],
  imports: [CommonModule]
})
export class ResultsComponent {
  score: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { score: number };
    this.score = state?.score ?? 0;
  }

  goHome() {
    this.router.navigate(['']);
  }
}
