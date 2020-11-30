import { Component, OnInit } from '@angular/core';
import { Submission } from '../submission';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  submissions:Submission[] = [];

  constructor(private submissionService:SubmissionService) { }

  ngOnInit(): void {
    this.submissions = this.submissionService.getAllSubmissions();
  }

}
