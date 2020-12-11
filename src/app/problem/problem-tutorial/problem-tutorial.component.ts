import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-tutorial',
  templateUrl: './problem-tutorial.component.html',
  styleUrls: ['./problem-tutorial.component.css']
})
export class ProblemTutorialComponent implements OnInit {

  routeParameterRetrieverObservable:RouteParameterRetrieverObservable = null;

  tutorial:string = '';
  constructor(private problemService:ProblemService, private route:ActivatedRoute) { }

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }

  updateTutorial():void{
    this.tutorial = this.problemService.getProblemTutorial(this.getId());
  }

  ngOnInit(): void {
    this.routeParameterRetrieverObservable = 
      RouteParameterRetrieverObservable
        .fromRouteParameterNameAndNotifyChange(this.route.parent, 'id', this.updateTutorial.bind(this));
    this.updateTutorial();
  }

}
