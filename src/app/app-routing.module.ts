import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemDescriptionComponent } from './problem/problem-description/problem-description.component';
import { ProblemSubmissionComponent } from './problem/problem-submission/problem-submission.component';
import { ProblemTutorialComponent } from './problem/problem-tutorial/problem-tutorial.component';
import { ProblemComponent } from './problem/problem.component';

const routes: Routes = [
  {path:'', redirectTo:'problem/0', pathMatch:'full'},
  {path:'problem/:id', component:ProblemComponent, children:[
    {path:'', redirectTo:'description', pathMatch:'full'},
    {path:'description', component:ProblemDescriptionComponent},
    {path:'tutorial', component:ProblemTutorialComponent},
    {path:'submission', component:ProblemSubmissionComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
