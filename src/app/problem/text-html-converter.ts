export class TextHtmlConverter{
    constructor(){}

    replaceLineBreaks(text:string):string{
        let re = /<br>/gi;
        return text.replace(re, '\n');
    }
}