import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';
import { Problem } from '../problem';
import { ProblemBuilder } from '../problem-builder';
import { ProblemComponent } from '../problem.component';
import { ProblemService } from '../problem.service';
import { TextHtmlConverter } from '../text-html-converter';

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.css']
})
export class EditProblemComponent implements OnInit {

  private routerParameterRetrieverObservable : RouteParameterRetrieverObservable;

  problem:Problem = null;

  problemForm:FormGroup = null;

  constructor(private route:ActivatedRoute, private problemService:ProblemService, private router:Router) { }

  getId():number{
    return +this.routerParameterRetrieverObservable.parameterValue;
  }

  private updateProblem():void{
    const id = this.getId();
    console.log(id);
    this.problem = this.problemService.getProblem(id);
    this.initForm();
  }

  private initRouterParameterRetrieverObservable():void{
    console.log(this.route);
    this.routerParameterRetrieverObservable = 
      RouteParameterRetrieverObservable.
        fromRouteParameterNameAndNotifyChange(this.route.parent, 'id', this.updateProblem.bind(this));
  }

  private getConstraintsFormArray():FormArray{
    return new FormArray(this.problem.constraints.map(constraint => 
      new FormGroup({
        'constraint': new FormControl(constraint, Validators.required)
      })));
  }

  private getExamplesFormArray():FormArray{
    let textHtmlConverter = new TextHtmlConverter();
    return new FormArray(this.problem.examples.map(example => 
      new FormGroup({
        'input': new FormControl(textHtmlConverter.replaceLineBreaks(example.inputInHtml), Validators.required),
        'output': new FormControl(textHtmlConverter.replaceLineBreaks(example.outputInHtml), Validators.required)
      })));
  }
  private initForm():void{
    this.problemForm = new FormGroup({
      'timeLimit': new FormControl(this.problem.timeLimitInMiliseconds, Validators.pattern('[0-9]+')),
      'memoryLimit': new FormControl(this.problem.memoryLimitInMegaBytes, Validators.pattern('[0-9]+')),
      'title': new FormControl(this.problem.title, Validators.required),
      'description': new FormControl(this.problem.description, Validators.required),
      'inputFormat': new FormControl(this.problem.inputFormat, Validators.required),
      'outputFormat': new FormControl(this.problem.outputFormat, Validators.required),
      'constraints': this.getConstraintsFormArray(),
      'examples': this.getExamplesFormArray(),
      'exampleExplanations': new FormControl(this.problem.exampleExplanations),
      'tutorial': new FormControl(this.problem.tutorial)
    });
  }

  ngOnInit(): void {
    this.initRouterParameterRetrieverObservable();
    console.log(this.getId());
    this.updateProblem();
  }

  private addRandomIdToProblem(problem:Problem):void{
    new ProblemBuilder(problem)
    .withId(this.getId())
    .build();
}

  onSubmit(newProblem:Problem):void{
    this.addRandomIdToProblem(newProblem);
    this.problemService.updateProblem(this.getId(), newProblem);
    this.router.navigate(['/problem', this.getId(), 'description']);
  }

}
