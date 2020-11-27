import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-example',
  templateUrl: './problem-example.component.html',
  styleUrls: ['./problem-example.component.css']
})
export class ProblemExampleComponent implements OnInit {

  @Input() input:string;
  @Input() output:string;

  constructor() { }

  ngOnInit(): void {
  }

}
