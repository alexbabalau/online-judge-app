import { Problem } from '../problem/problem';
import { SourceCode } from './source-code';

export class Submission{
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }
    public get problem(): Problem {
        return this._problem;
    }
    public set problem(value: Problem) {
        this._problem = value;
    }
    public get sourceCode(): SourceCode {
        return this._sourceCode;
    }
    public set sourceCode(value: SourceCode) {
        this._sourceCode = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get memoryInMegaBytes(): number {
        return this._memoryInMegaBytes;
    }
    public set memoryInMegaBytes(value: number) {
        this._memoryInMegaBytes = value;
    }
    public get timeInMiliseconds(): number {
        return this._timeInMiliseconds;
    }
    public set timeInMiliseconds(value: number) {
        this._timeInMiliseconds = value;
    }
    constructor(private _timeInMiliseconds: number, 
        private _memoryInMegaBytes: number,
        private _date: Date,
        private _sourceCode: SourceCode,
        private _problem: Problem,
        private _score: number,
        private _id: number){}
    
    public getProblemTitle():string{
        return this._problem.title;
    }

    public getLanguage():string{
        return this._sourceCode.language;
    }

    public getCode():string{
        return this._sourceCode.code;
    }

    public getDateAsString():string{
        return this._date.toDateString();
    }

    public getProblemId():number{
        return this._problem.id;
    }
}