import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrls: ['./results.css'],
  imports: [RouterModule]
})
export class ResultsComponent {
  score: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.score = nav.extras.state['score'];
    }
  }
}
