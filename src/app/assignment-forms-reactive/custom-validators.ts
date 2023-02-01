import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    /*Validation async. Usually it'll make a request to the server*/
    static asyncValidationProjectName(control: FormControl): Promise<any> | Observable<any> {
        const verifyName = new Promise((ressolve, reject) => {
            setTimeout(() => {
                if ((<string>control.value).toLowerCase() === 'test1') {
                    return ressolve({ 'nameForbiddenTeste': true })
                } else {
                    return ressolve(null);
                }
            }, 1000);
        });
        return verifyName;
    }

    /*Normal validation*/
    static validationProjectName(control: FormControl): { [s: string]: boolean } | null {
        if (control.value != null &&
            (<string>control.value).toLowerCase() === 'test') {
            return { 'nameForbiddenTeste': true }
        }
        return null;
    }
}