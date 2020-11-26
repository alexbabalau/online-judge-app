import { Example } from './example';

export class Problem{
    
    

    constructor(private _title: string,
        private _description: string,
        private _inputFormat: string,
        private _outputFormat: string,
        private _examples: Example[], 
        private _constraints: string[],
        private _exampleExplanations: string, 
        private _timelimitInMiliseconds: number, 
        private _memoryLimitInMegaBytes: number){}
    
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

    public get timelimitInMiliseconds(): number {
        return this._timelimitInMiliseconds;
    }

    public set timelimitInMiliseconds(value: number) {
        this._timelimitInMiliseconds = value;
    }

    public get constraints(): string[] {
        return this._constraints;
    }

    public set constraints(value: string[]) {
        this._constraints = value;
    }

    public get examples(): Example[] {
        return this._examples;
    }

    public set examples(value: Example[]) {
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

    public addExample(example:Example):void{
        this._examples.push(example);
    }

    public addConstraint(constraint:string):void{
        this._constraints.push(constraint);
    }
}