import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {

  problem:Problem = null; 

  private routeParameterRetrieverObservable:RouteParameterRetrieverObservable = null;

  private handleIdChange():void{
    let id = this.getId();
    this.problem = this.problemService.getProblem(id);
  }

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }

  constructor(private problemService:ProblemService, private route:ActivatedRoute) {
    
  }

    ngOnInit(): void {
      console.log(this.route);
      this.routeParameterRetrieverObservable = 
        RouteParameterRetrieverObservable
          .fromRouteParameterNameAndNotifyChange(this.route, 'id', this.handleIdChange.bind(this));
        let id:number = this.getId();
        this.problem = this.problemService.getProblem(id);
        console.log(id);
    }

}
