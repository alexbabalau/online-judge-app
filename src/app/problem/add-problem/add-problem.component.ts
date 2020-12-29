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

  constructor(private problemService:ProblemService, private route:ActivatedRoute, private router:Router) { }

  private initForm():void{
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

  ngOnInit(): void {
    this.initForm();
  }

  private addRandomIdToProblem(problem:Problem):void{
      new ProblemBuilder(problem)
      .withId(Math.floor(Math.random() * 10000))
      .build();
  }

  onSubmit(problem:Problem):void{
    this.addRandomIdToProblem(problem);
    this.problemService.addProblem(problem);
    this.router.navigate(['../problem-list'], {relativeTo:this.route});
  }


}
