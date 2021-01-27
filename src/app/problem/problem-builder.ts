import { Test } from './test';
import { Problem } from './problem';

export class ProblemBuilder{
    private readonly _problem:Problem;

    constructor(problem?:Problem){
        if(problem)
            this._problem = problem.clone();
        else
            this._problem = new Problem('', '', '', '', [], [], '', 1000, 256, '', 0, []);
    }

    public withTests(tests:Test[]):ProblemBuilder{
        this._problem.tests = tests;
        return this;
    }

    public addTest(test:Test):ProblemBuilder{
        this._problem.tests.push(test);
        return this;
    }

    public withId(id:number):ProblemBuilder{
        this._problem.id = id;
        return this;
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

    public withExamples(examples:Test[]): ProblemBuilder{
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

    public withTutorial(tutorial:string):ProblemBuilder{
        this._problem.tutorial = tutorial;
        return this;
    }

    public addExample(example:Test): ProblemBuilder{
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