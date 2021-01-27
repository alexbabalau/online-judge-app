import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormFileChangeHandler } from 'src/app/shared/form-file-change-handler';
import { ObjectFromFormCreator } from 'src/app/shared/object-from-form-creation/object-from-form-creator.interface';
import { TestsFromFromCreator } from 'src/app/shared/object-from-form-creation/tests-from-form-creator';
import { Test } from '../test';

@Component({
  selector: 'app-add-tests-form',
  templateUrl: './add-tests-form.component.html',
  styleUrls: ['./add-tests-form.component.css']
})
export class AddTestsFormComponent implements OnInit {
  @Input() testsForm:FormGroup;
  @Output() submitEvent:EventEmitter<Test[]> = new EventEmitter<Test[]>();
  formFileChangeHandler = new FormFileChangeHandler();
  testsFromFormCreator:ObjectFromFormCreator = new TestsFromFromCreator();

  constructor(private changeDetector:ChangeDetectorRef) { }

  private saveFileContentInForm(reader, args:any[]){
    const fileIndex:number = <number>args[0];
    const fileType:string = <string>args[1];
    
    this.testsForm.get(`tests.${fileIndex}.${fileType}`).patchValue(reader.result);
    this.changeDetector.markForCheck();

  }

  onFileChange(fileIndex:number, fileType:string, event):void{
    this.formFileChangeHandler.handleFileChange(event, this.saveFileContentInForm.bind(this, fileIndex, fileType));
  }

  getTestsControls(){
    return (<FormArray>this.testsForm.get('tests')).controls;
  }

  ngOnInit(): void {
  }

  private getTestsFromForm():Test[]{
    const testsControls = this.getTestsControls();
    return testsControls.map(control => control as FormGroup).map(singleTestFormGroup => this.testsFromFormCreator.create(singleTestFormGroup));
  }

  onSubmit(){
    if(this.testsForm.valid){
      this.submitEvent.emit(this.getTestsFromForm());
    }
    
  }

}
