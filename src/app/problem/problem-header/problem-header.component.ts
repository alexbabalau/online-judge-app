import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteParameterRetrieverObservable } from 'src/app/shared/route-parameter-retriever-observable';

@Component({
  selector: 'app-problem-header',
  templateUrl: './problem-header.component.html',
  styleUrls: ['./problem-header.component.css']
})
export class ProblemHeaderComponent implements OnInit {

  private routeParameterRetrieverObservable:RouteParameterRetrieverObservable = null;

  getId():number{
    return +this.routeParameterRetrieverObservable.parameterValue;
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParameterRetrieverObservable = 
      RouteParameterRetrieverObservable
        .fromRouteAndParameterName(this.route, 'id');
  }

}
