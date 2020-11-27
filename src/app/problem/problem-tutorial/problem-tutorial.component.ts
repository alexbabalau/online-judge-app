import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-tutorial',
  templateUrl: './problem-tutorial.component.html',
  styleUrls: ['./problem-tutorial.component.css']
})
export class ProblemTutorialComponent implements OnInit {

  id:number = 0;

  tutorial:string = '';
  constructor(private problemService:ProblemService) { }

  ngOnInit(): void {
    this.tutorial = this.problemService.getTutorial(this.id);
  }

}
