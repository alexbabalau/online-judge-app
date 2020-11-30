export class SourceCode{
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }
    public get language(): string {
        return this._language;
    }
    public set language(value: string) {
        this._language = value;
    }
    public get sizeInBytes(): number {
        return this._sizeInBytes;
    }
    public set sizeInBytes(value: number) {
        this._sizeInBytes = value;
    }
    constructor(private _sizeInBytes: number,
        private _language: string,
        private _code: string){}
    
}