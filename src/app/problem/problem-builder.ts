import { Example } from './example';
import { Problem } from './problem';

export class ProblemBuilder{
    private readonly _problem:Problem;

    constructor(){
        this._problem = new Problem('', '', '', '', [], [], '', 1000, 256);
    }

    public withTitle(title:string): ProblemBuilder{
        this._problem.title = title;
        return this;
    }

    public withDescription(description:string): ProblemBuilder{
        this._problem.description = description;
        return this;
    }

    public withInputFormat(inputFormat:string): ProblemBuilder{
        this._problem.inputFormat = inputFormat;
        return this;
    }

    public withOutputFormat(outputFormat:string): ProblemBuilder{
        this._problem.outputFormat = outputFormat;
        return this;
    }

    public withExamples(examples:Example[]): ProblemBuilder{
        this._problem.examples = examples;
        return this;
    }

    public withConstraints(constraints:string[]): ProblemBuilder{
        this._problem.constraints = constraints;
        return this;
    }

    public withExampleExplanations(exampleExplanations:string): ProblemBuilder{
        this._problem.exampleExplanations = exampleExplanations;
        return this;
    }
    public withTimeLimitInMiliseconds(timeLimitInMiliseconds:number):ProblemBuilder{
        this._problem.timeLimitInMiliseconds = timeLimitInMiliseconds;
        return this;
    }

    public withMemoryLimitInMegabytes(memoryLimitInMegabytes:number):ProblemBuilder{
        this._problem.memoryLimitInMegaBytes = memoryLimitInMegabytes;
        return this;
    }

    public addExample(example:Example): ProblemBuilder{
        this._problem.addExample(example);
        return this;
    }

    public addConstraint(constraint:string): ProblemBuilder{
        this._problem.addConstraint(constraint);
        return this;
    }

    public build():Problem{
        return this._problem;
    }

}