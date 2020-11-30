import { SourceCode } from './source-code';

export class SourceCodeBuilder{
    
    private _sourceCode:SourceCode;

    constructor(){
        this._sourceCode = new SourceCode(0, '', '');
    }

    public withSizeInBytes(sizeInBytes:number):SourceCodeBuilder{
        this._sourceCode.sizeInBytes = sizeInBytes;
        return this;
    }

    public withLanguage(language:string):SourceCodeBuilder{
        this._sourceCode.language = language;
        return this;
    }

    public withCode(code:string):SourceCodeBuilder{
        this._sourceCode.code = code;
        return this;
    }

    public build():SourceCode{
        return this._sourceCode;
    }
}