import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProblemComponent } from './problem/add-problem/add-problem.component';
import { EditProblemComponent } from './problem/edit-problem/edit-problem.component';
import { ProblemDescriptionComponent } from './problem/problem-description/problem-description.component';
import { ProblemListComponent } from './problem/problem-list/problem-list.component';
import { ProblemTutorialComponent } from './problem/problem-tutorial/problem-tutorial.component';
import { ProblemComponent } from './problem/problem.component';
import { SubmissionListComponent } from './submission/submission-list/submission-list.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [
  {path:'', redirectTo:'problem-list', pathMatch:'full'},
  {path:'problem-add', component:AddProblemComponent},
  {path:'problem-list', component:ProblemListComponent},
  {path:'problem/:id', component:ProblemComponent, children:[
    {path:'', redirectTo:'description', pathMatch:'full'},
    {path:'description', component:ProblemDescriptionComponent},
    {path:'tutorial', component:ProblemTutorialComponent},
    {path:'submission', component:SubmissionListComponent},
    {path:'edit', component:EditProblemComponent}
  ]},
  {path:'submission/:id', component:SubmissionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
