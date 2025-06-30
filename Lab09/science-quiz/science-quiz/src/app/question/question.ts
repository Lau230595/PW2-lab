import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuestionService } from '../question-service';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './question.html',
  styleUrls: ['./question.css'],
  imports: [CommonModule, RouterModule]
})
export class QuestionComponent implements OnInit {
  currentQuestion: any;
  currentIndex: number = 0;
  score: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qService: QuestionService
  ) {}

  ngOnInit(): void {
    this.currentIndex = +this.route.snapshot.paramMap.get('id')!;
    this.currentQuestion = this.qService.getQuestions()[this.currentIndex];
  }

  checkAnswer(option: string): void {
    if (option === this.currentQuestion.correctAnswer) {
      this.score++;
    }

    const nextIndex = this.currentIndex + 1;
    const questions = this.qService.getQuestions();

    if (nextIndex < questions.length) {
      this.router.navigate(['/question', nextIndex]);
    } else {
      this.router.navigate(['/results'], {
        state: { score: this.score }
      });
    }
  }
}
