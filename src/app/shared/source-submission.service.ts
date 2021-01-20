import { Injectable } from "@angular/core";
import { Problem } from "../problem/problem";
import { SourceCodeBuilder } from "../submission/source-code-builder";
import { Submission } from "../submission/submission";
import { SubmissionBuilder } from "../submission/submission-builder";

@Injectable({providedIn:'root'})
export class SourceSubmissionService{
    getSubmissionFromCodeFile(codeFileBase64:string, problem:Problem):Submission{
        console.log(codeFileBase64);
        console.log(atob(codeFileBase64));
        const submission = new SubmissionBuilder()
            .withProblem(problem)
            .withScore(100)
            .withDate(new Date())
            .withMemoryInMegaBytes(1)
            .withTimeInMiliseconds(1000)
            .withSourceCode(new SourceCodeBuilder()
                .withCode(atob(codeFileBase64))
                .build())
            .withId(Math.floor(Math.random() * 1000))
            .build();
        return submission;
    }
}