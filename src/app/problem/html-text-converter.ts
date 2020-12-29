export class HtmlTextConverter{
    constructor(){}

    addLineBreaks(text:string):string{
        let re = /[\n]/gi;
        return text.replace(re, '<br>');
    }
}