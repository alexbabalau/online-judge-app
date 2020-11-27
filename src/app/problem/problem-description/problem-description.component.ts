import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {

  id:number = 0;

  problem:Problem = null; 

  constructor(private problemService:ProblemService) { }

  ngOnInit(): void {
    this.problem = this.problemService.getProblem(this.id);
    console.log(this.problem);
  }

}
