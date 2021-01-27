import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {EventEmitter} from '@angular/core';
import { ProblemBuilder } from '../problem-builder';
import { Problem } from '../problem';
import { Test } from '../test';
import { HtmlTextConverter } from '../html-text-converter';
import { ProblemFromFormCreator } from 'src/app/shared/object-from-form-creation/problem-from-form-creator';
import { ObjectFromFormCreator } from 'src/app/shared/object-from-form-creation/object-from-form-creator.interface';

@Component({
  selector: 'app-problem-form',
  templateUrl: './problem-form.component.html',
  styleUrls: ['./problem-form.component.css']
})
export class ProblemFormComponent implements OnInit {

  @Input() problemForm:FormGroup;
  @Output() submitEvent:EventEmitter<Problem> = new EventEmitter<Problem>();
  problemFromFormCreator:ObjectFromFormCreator = new ProblemFromFormCreator();

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

  onSubmit():void{
    if(this.problemForm.valid){
      const problem = this.problemFromFormCreator.create(this.problemForm);
      console.log(problem);
      this.submitEvent.emit(problem);
    }
  }

}
