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
    SubmissionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
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
