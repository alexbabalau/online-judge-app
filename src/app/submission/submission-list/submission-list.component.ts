import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';
import { Submission } from '../submission';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  submissions:Submission[] = [];

  routeParameterRetrieverObservable:RouteParameterRetrieverObservable = null;

  constructor(private submissionService:SubmissionService, private route:ActivatedRoute) { }

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }

  updateSubmissions():void{
    let currentId = this.getId();
    this.submissions = this.submissionService.getSubmissionsFromProblem(currentId);
  }

  ngOnInit(): void {
    this.routeParameterRetrieverObservable = 
      RouteParameterRetrieverObservable
        .fromRouteParameterNameAndNotifyChange(this.route.parent, 'id', this.updateSubmissions.bind(this));
    
    this.updateSubmissions();
  }

}
