import { Test } from './test';

export class Problem{
    

    constructor(private _title: string,
        private _description: string,
        private _inputFormat: string,
        private _outputFormat: string,
        private _examples: Test[], 
        private _constraints: string[],
        private _exampleExplanations: string, 
        private _timeLimitInMiliseconds: number, 
        private _memoryLimitInMegaBytes: number,
        private _tutorial: string,
        private _id: number,
        private _tests:Test[]){}
    
    public clone():Problem{
        //return new Problem(this._title, 
        //    this._description,
        //    this._inputFormat,
        //    this._outputFormat,
        //    this._examples,
        //    this._constraints,
        //    this._exampleExplanations,
        //    this._timeLimitInMiliseconds,
        //    this._memoryLimitInMegaBytes,
        //    this._tutorial,
        //    this._id,
        //    this._tests);
        return Object.create(this);
    }

    public get tests():Test[]{
        return this._tests;
    }

    public set tests(tests:Test[]){
        this._tests = tests;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get tutorial(): string {
        return this._tutorial;
    }
    public set tutorial(value: string) {
        this._tutorial = value;
    }
    
    public get exampleExplanations(): string {
        return this._exampleExplanations;
    }
    public set exampleExplanations(value: string) {
        this._exampleExplanations = value;
    }

    public get inputExamples():string[]{
        return this._examples.map(example => example.inputInHtml);
    }

    public get outputExamples():string[]{
        return this._examples.map(example => example.outputInHtml);
    }

    public get outputFormat(): string {
        return this._outputFormat;
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public get inputFormat(): string {
        return this._inputFormat;
    }
    public set inputFormat(value: string) {
        this._inputFormat = value;
    }
    
    public get memoryLimitInMegaBytes(): number {
        return this._memoryLimitInMegaBytes;
    }

    public set memoryLimitInMegaBytes(value: number) {
        this._memoryLimitInMegaBytes = value;
    }

    public get timeLimitInMiliseconds(): number {
        return this._timeLimitInMiliseconds;
    }

    public set timeLimitInMiliseconds(value: number) {
        this._timeLimitInMiliseconds = value;
    }

    public get constraints(): string[] {
        return this._constraints;
    }

    public set constraints(value: string[]) {
        this._constraints = value;
    }

    public get examples(): Test[] {
        return this._examples;
    }

    public set examples(value: Test[]) {
        this._examples = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }
    
    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public addExample(example:Test):void{
        this._examples.push(example);
    }

    public addConstraint(constraint:string):void{
        this._constraints.push(constraint);
    }
}