import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormFileChangeHandler } from 'src/app/shared/form-file-change-handler';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';
import { SourceSubmissionService } from 'src/app/shared/source-submission.service';
import { SubmissionService } from 'src/app/submission/submission.service';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {

  problem:Problem = null; 
  submitForm:FormGroup = null;
  formFileChangeHandler:FormFileChangeHandler = new FormFileChangeHandler();

  private routeParameterRetrieverObservable:RouteParameterRetrieverObservable = null;

  private updateProblem():void{
    let id = this.getId();
    this.problem = this.problemService.getProblem(id);
  }

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }

  private initForm(){
    this.submitForm = new FormGroup({
      'solutionFile':new FormControl(null, Validators.required)
    });
  }

  constructor(private problemService:ProblemService, 
    private route:ActivatedRoute, 
    private changeDetector:ChangeDetectorRef,
    private sourceSubmissionService:SourceSubmissionService,
    private submissionService:SubmissionService,
    private router:Router) {
    
  }

  ngOnInit(): void {

    this.routeParameterRetrieverObservable = 
      RouteParameterRetrieverObservable
        .fromRouteParameterNameAndNotifyChange(this.route.parent, 'id', this.updateProblem.bind(this));
    
    this.updateProblem();
    this.initForm();
  }

  private saveFileContentInForm(reader):void{
    
      this.submitForm.patchValue({
        'solutionFile': reader.result
      });
  
      this.changeDetector.markForCheck();

  }

  onFileChange(event) {
    this.formFileChangeHandler.handleFileChange(event, this.saveFileContentInForm.bind(this));
  }

  onSubmit():void{
    const submissionFile = this.submitForm.value['solutionFile'];
    const base64EncodedFile = submissionFile.slice(23,);
    const submission = this.sourceSubmissionService.getSubmissionFromCodeFile(base64EncodedFile, this.problem);
    console.log(submission);
    this.submissionService.addSubmission(submission);
    this.router.navigate(['/problem', this.getId(), 'submission']);
  }

}
