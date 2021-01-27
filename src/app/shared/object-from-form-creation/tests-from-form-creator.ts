import { FormGroup } from "@angular/forms";
import { HtmlTextConverter } from "src/app/problem/html-text-converter";
import { Test } from "src/app/problem/test";
import { TextHtmlConverter } from "src/app/problem/text-html-converter";
import { ObjectFromFormCreator } from "./object-from-form-creator.interface";

export class TestsFromFromCreator implements ObjectFromFormCreator{
    create(form:FormGroup):Test{
        const htmlTextConverter = new HtmlTextConverter();
        const input = htmlTextConverter.addLineBreaks(form.value['input']);
        const output = htmlTextConverter.addLineBreaks(form.value['output']);

        return new Test(input, output);
    }
}