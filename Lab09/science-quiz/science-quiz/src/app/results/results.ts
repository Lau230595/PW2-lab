import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrls: ['./results.css'],
  imports: [CommonModule, RouterModule]
})
export class ResultsComponent {
  score: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.score = nav.extras.state['score'] || 0;
    }
  }

  restart(): void {
    this.router.navigate(['/']);
  }
}
