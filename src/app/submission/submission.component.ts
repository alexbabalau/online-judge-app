import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteParameterRetrieverObservable } from '../shared/route-parameter-retriever-observable';
import { Submission } from './submission';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  private routeParameterRetrieverObservable:RouteParameterRetrieverObservable;

  id:number = 0;

  submission:Submission = null;

  private handleIdChange():void{
    let id:number = this.getId();
    this.submission = this.submissionService.get(id);
  }

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }


  constructor(private submissionService:SubmissionService, private route:ActivatedRoute) {
    
  }

  
  ngOnInit(): void {
    this.routeParameterRetrieverObservable = 
      RouteParameterRetrieverObservable
        .fromRouteParameterNameAndNotifyChange(this.route, 'id', this.handleIdChange.bind(this));
      let id:number = this.getId();
      this.submission = this.submissionService.get(id);
  }

}
