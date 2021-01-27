import { FormGroup } from "@angular/forms";
import { HtmlTextConverter } from "src/app/problem/html-text-converter";
import { Problem } from "src/app/problem/problem";
import { ProblemBuilder } from "src/app/problem/problem-builder";
import { Test } from "src/app/problem/test";
import { ObjectFromFormCreator } from "./object-from-form-creator.interface";

export class ProblemFromFormCreator implements ObjectFromFormCreator{

    private getConstraintsFromForm(form:FormGroup):string[]{
        return form.value['constraints'].map(({'constraint':constraint}) => constraint);
      }
    
    private getExamplesFromForm(form:FormGroup):Test[]{
        let htmlTextConverter:HtmlTextConverter = new HtmlTextConverter();
        return form.value['examples'].map(({'input':input, 'output':output}) => new Test(htmlTextConverter.addLineBreaks(input), htmlTextConverter.addLineBreaks(output)));
    }

    create(form: FormGroup):Problem {
        return new ProblemBuilder()
            .withTimeLimitInMiliseconds(+form.value['timeLimit'])
            .withMemoryLimitInMegabytes(+form.value['memoryLimit'])
            .withTitle(form.value['title'])
            .withDescription(form.value['description'])
            .withInputFormat(form.value['inputFormat'])
            .withOutputFormat(form.value['outputFormat'])
            .withConstraints(this.getConstraintsFromForm(form))
            .withExamples(this.getExamplesFromForm(form))
            .withExampleExplanations(form.value['exampleExplanations'])
            .withTutorial(form.value['tutorial'])
            .build();
    }

}