import { Injectable } from '@angular/core';
import { ProblemBuilder } from '../problem/problem-builder';
import { SourceCodeBuilder } from './source-code-builder';
import { Submission } from './submission';
import { SubmissionBuilder } from './submission-builder';

@Injectable({providedIn:'root'})
export class SubmissionService{
    private _submission:Submission[] = [
        new SubmissionBuilder()
        .withTimeInMiliseconds(46)
        .withMemoryInMegaBytes(1)
        .withDate(new Date())
        .withSourceCode(new SourceCodeBuilder()
            .withCode(
            `
            #include<iostream>
            using namespace std;
            int main(){
                int a, b;
                cin >> a >> b;
                cout << a + b << "\\n";
                return 0;
            }
            `)
            .withLanguage('cpp')
            .withSizeInBytes(1024)
            .build())
        .withProblem(new ProblemBuilder()
            .withTitle('Algoritmul lui Euclid')
            .withId(0)
            .build())
        .withScore(100)
        .build()
    ];

    constructor(){
        this._submission.push(this._submission[0]);
    }

    public get(submissionId:number):Submission{
        return this._submission[submissionId];
    }

    public getAllSubmissions():Submission[]{
        return this._submission;
    }

    public getSubmissionsFromProblem(problemId:number):Submission[]{
        return this._submission.filter(submission => submission.getProblemId() === problemId);
    }
    
}