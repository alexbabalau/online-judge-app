import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemHeaderComponent } from './problem/problem-header/problem-header.component';
import { ProblemDescriptionComponent } from './problem/problem-description/problem-description.component';
import { ProblemExampleComponent } from './problem/problem-description/problem-example/problem-example.component';
import { ProblemTutorialComponent } from './problem/problem-tutorial/problem-tutorial.component';
import { SubmissionComponent } from './submission/submission.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SubmissionListComponent } from './submission/submission-list/submission-list.component';
import { ProblemListComponent } from './problem/problem-list/problem-list.component';
import { AddProblemComponent } from './problem/add-problem/add-problem.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProblemComponent } from './problem/edit-problem/edit-problem.component';
import { ProblemFormComponent } from './problem/problem-form/problem-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemComponent,
    ProblemHeaderComponent,
    ProblemDescriptionComponent,
    ProblemExampleComponent,
    ProblemTutorialComponent,
    SubmissionComponent,
    SubmissionListComponent,
    ProblemListComponent,
    AddProblemComponent,
    EditProblemComponent,
    ProblemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
