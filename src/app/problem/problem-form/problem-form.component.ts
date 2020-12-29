import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {EventEmitter} from '@angular/core';
import { ProblemBuilder } from '../problem-builder';
import { Problem } from '../problem';
import { Test } from '../test';
import { HtmlTextConverter } from '../html-text-converter';

@Component({
  selector: 'app-problem-form',
  templateUrl: './problem-form.component.html',
  styleUrls: ['./problem-form.component.css']
})
export class ProblemFormComponent implements OnInit {

  @Input() problemForm:FormGroup;
  @Output() submitEvent:EventEmitter<Problem> = new EventEmitter<Problem>();


  constructor() { }

  ngOnInit(): void {
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
    let htmlTextConverter:HtmlTextConverter = new HtmlTextConverter();
    return this.problemForm.value['examples'].map(({'input':input, 'output':output}) => new Test(htmlTextConverter.addLineBreaks(input), htmlTextConverter.addLineBreaks(output)));
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
      .build();
  }

  onSubmit():void{
    if(this.problemForm.valid){
      const problem = this.createProblemFromForm();
      console.log(problem);
      this.submitEvent.emit(problem);
    }
  }

}
