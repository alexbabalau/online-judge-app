import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Problem } from '../problem';
import { ProblemBuilder } from '../problem-builder';
import { ProblemService } from '../problem.service';
import { Test } from '../test';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  problemForm:FormGroup = null;
  testsForm:FormGroup = null;
  addTestsMode:boolean = false;
  createdProblem:Problem = null;

  constructor(private problemService:ProblemService, private route:ActivatedRoute, private router:Router) { }

  private initProblemForm():void{
    this.problemForm = new FormGroup({
      'timeLimit': new FormControl(null, Validators.pattern('[0-9]+')),
      'memoryLimit': new FormControl(null, Validators.pattern('[0-9]+')),
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'inputFormat': new FormControl(null, Validators.required),
      'outputFormat': new FormControl(null, Validators.required),
      'constraints': new FormArray([]),
      'examples': new FormArray([]),
      'exampleExplanations': new FormControl(null),
      'tutorial': new FormControl(null)
    });
    
  }

  private createTestsFormArray():FormArray{
    const numberOfTests = 10;
    const result = [];
    for(let i = 0; i < numberOfTests; i += 1){
      result.push(new FormGroup({
        'input':new FormControl(null, Validators.required),
        'output': new FormControl(null, Validators.required)
      }));
    }
    return new FormArray(result);
  }

  private initTestsForm():void{
    this.testsForm = new FormGroup({
      'tests':this.createTestsFormArray()
    });
  }

  ngOnInit(): void {
    this.initProblemForm();
    this.initTestsForm();
  }

  private addRandomIdToProblem():void{
      this.createdProblem = new ProblemBuilder(this.createdProblem)
      .withId(Math.floor(Math.random() * 10000))
      .build();
  }

  onSubmitProblemDetails(problem:Problem):void{
    this.createdProblem = problem;
    this.addRandomIdToProblem();
    this.addTestsMode = true;
  }

  private addTestsToProblem(tests:Test[]):void{
    this.createdProblem = new ProblemBuilder(this.createdProblem).withTests(tests).build();
  }

  goBackToAddDescription():void{
    this.addTestsMode = false;
  }

  onSubmitTests(tests:Test[]):void{
    this.addTestsToProblem(tests);
    console.log(this.createdProblem);
    this.problemService.addProblem(this.createdProblem);
    this.router.navigate(['../problem-list'], {relativeTo:this.route});
  }

}
