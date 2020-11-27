export class Example{
    constructor (private _inputInHtml:string, private _outputInHtml:string){

    }

    public get inputInHtml():string{
        return this._inputInHtml;
    }

    public set inputInHtml(input:string){
        this._inputInHtml = input;
    }
    public get outputInHtml():string{
        return this._outputInHtml;
    }

    public set outputInHtml(out:string){
        this._outputInHtml = out;
    }
}