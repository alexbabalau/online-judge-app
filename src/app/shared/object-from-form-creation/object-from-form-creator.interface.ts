import { FormGroup } from "@angular/forms";

export interface ObjectFromFormCreator{
    create(form:FormGroup):any;
}