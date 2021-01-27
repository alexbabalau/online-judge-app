import { Injectable } from "@angular/core";
import { Problem } from "./problem";
import { ProblemBuilder } from "./problem-builder";
import { Test } from "./test";

@Injectable({providedIn:'root'})
export class NewProblemService{
    private _problemCreated:Problem = null;

    createProblemWithoutTests(problemWithoutTests:Problem):void{
        this._problemCreated = problemWithoutTests;
    }

    addTestsToProblem(tests:Test[]):void{
        this._problemCreated = new ProblemBuilder(this._problemCreated).withTests(tests).build();
    }

    hasCreationStarted():boolean{
        return this._problemCreated != null;
    }

    cancelCreation():void{
        this._problemCreated = null;
    }

    finishCreation():void{
        this._problemCreated = null;
    }
}