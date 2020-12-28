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

  ngOnInit(): void {
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

  getConstraintControls(){
    return (<FormArray>this.problemForm.get('constraints')).controls;
  }

  onAddConstraint():void{
    (<FormArray> this.problemForm.get('constraints')).push(new FormGroup({
      'constraint': new FormControl(null, Validators.required)
    }));
  }

  getExampleControls(){
    return (<FormArray>this.problemForm.get('examples')).controls;
  }

  onAddExample():void{
    (<FormArray> this.problemForm.get('examples')).push(new FormGroup({
      'input': new FormControl(null, Validators.required),
      'output': new FormControl(null, Validators.required)
    }));
  }

  onDeleteExample(index:number):void{
    (<FormArray>this.problemForm.get('examples')).removeAt(index);
  }

  onDeleteConstraint(index:number):void{
    (<FormArray>this.problemForm.get('constraints')).removeAt(index);
  }

  private getConstraintsFromForm():string[]{
    return this.problemForm.value['constraints'].map(({'constraint':constraint}) => constraint);
  }

  private getExamplesFromForm():Test[]{
    return this.problemForm.value['examples'].map(({'input':input, 'output':output}) => new Test(input, output));
  }

  private createProblemFromForm():Problem{
    return new ProblemBuilder()
      .withTimeLimitInMiliseconds(+this.problemForm.value['timeLimit'])
      .withMemoryLimitInMegabytes(+this.problemForm.value['memoryLimit'])
      .withTitle(this.problemForm.value['title'])
      .withDescription(this.problemForm.value['description'])
      .withInputFormat(this.problemForm.value['inputFormat'])
      .withOutputFormat(this.problemForm.value['outputFormat'])
      .withConstraints(this.getConstraintsFromForm())
      .withExamples(this.getExamplesFromForm())
      .withExampleExplanations(this.problemForm.value['exampleExplanations'])
      .withTutorial(this.problemForm.value['tutorial'])
      .withId(Math.floor(Math.random() * 1000))
      .build();
  }

  onSubmit():void{
    if(this.problemForm.valid){
      const problem:Problem = this.createProblemFromForm();
      this.problemService.addProblem(problem);
      this.router.navigate(['../problem-list', {relativeTo:this.route}]);
    }
    
  }
}
