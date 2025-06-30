import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { QuestionComponent } from './question/question';
import { ResultsComponent } from './results/results';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
