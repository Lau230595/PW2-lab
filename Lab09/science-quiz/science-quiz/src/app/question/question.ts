import { Component } from '@angular/core';
import { QuestionService } from './question-service';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
  question: any;
  currentIndex: number = 0;
  score: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentIndex = id;
    this.question = this.questionService.getQuestions()[id];
  }

  selectAnswer(option: string) {
    if (option === this.question.correctAnswer) {
      this.score++;
    }

    const nextIndex = this.currentIndex + 1;
    const questions = this.questionService.getQuestions();

    if (nextIndex < questions.length) {
      this.router.navigate(['/question', nextIndex]);
    } else {
      this.router.navigate(['/results'], {
        queryParams: { score: this.score, total: questions.length }
      });
    }
  }
}
