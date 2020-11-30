import { Component, OnInit } from '@angular/core';
import { Submission } from './submission';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  submission:Submission = null;

  constructor(private submissionService:SubmissionService) { }

  ngOnInit(): void {
    this.submission = this.submissionService.get(0);
  }

}
