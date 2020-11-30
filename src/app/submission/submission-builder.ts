import { VirtualTimeScheduler } from 'rxjs';
import { Problem } from '../problem/problem';
import { ProblemBuilder } from '../problem/problem-builder';
import { SourceCode } from './source-code';
import { SourceCodeBuilder } from './source-code-builder';
import { Submission } from './submission';

export class SubmissionBuilder{
    
    private _submission:Submission;
    
    constructor(){
        this._submission = new Submission(0, 0, new Date(), new SourceCodeBuilder().build(), new ProblemBuilder().build(), 0);
    }

    public withScore(score:number):SubmissionBuilder{
        this._submission.score = score;
        return this;
    }

    public withTimeInMiliseconds(timeInMiliseconds:number):SubmissionBuilder{
        this._submission.timeInMiliseconds = timeInMiliseconds;
        return this;
    }

    public withProblem(problem:Problem):SubmissionBuilder{
        this._submission.problem = problem;
        return this;
    }

    public withMemoryInMegaBytes(memoryInMegaBytes:number):SubmissionBuilder{
        this._submission.memoryInMegaBytes = memoryInMegaBytes;
        return this;
    }

    public withDate(date:Date):SubmissionBuilder{
        this._submission.date = date;
        return this;
    }

    public withSourceCode(sourceCode:SourceCode):SubmissionBuilder{
        this._submission.sourceCode = sourceCode;
        return this;
    }

    public build():Submission{
        return this._submission;
    }
}