import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemHeaderComponent } from './problem/problem-header/problem-header.component';
import { ProblemDescriptionComponent } from './problem/problem-description/problem-description.component';
import { ProblemExampleComponent } from './problem/problem-description/problem-example/problem-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemComponent,
    ProblemHeaderComponent,
    ProblemDescriptionComponent,
    ProblemExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
