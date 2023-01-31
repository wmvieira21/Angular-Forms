import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsReactiveComponent implements OnInit {
  project: FormGroup;

  ngOnInit() {
    this.project = new FormGroup({
      'projectData': new FormGroup({

        //'projectName': new FormControl(null, [Validators.required, this.validationProjectName.bind(this)]),
        'projectName': new FormControl(null, [Validators.required], this.asyncValidationProjectName as AsyncValidatorFn),
        'emailAddress': new FormControl(null, [Validators.email, Validators.required]),
        'projectStatus': new FormControl(null)
      })
    });
  }
  onSubmit() {
    console.log(this.project.get('projectData').value);
  }
  /*Validation async*/
  asyncValidationProjectName(control: FormControl): Promise<any> | Observable<any> {
    const verifyName = new Promise((ressolve, reject) => {
      setTimeout(() => {
        if ((<string>control.value).toLowerCase() === 'teste') {
          return ressolve({ 'nameForbiddenTeste': true })
        } else {
          return ressolve(null);
        }
      }, 1000);
    });
    return verifyName;
  }

  /*Normal validation */
  validationProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value != null &&
      (<string>control.value).toLowerCase() === 'teste') {
      return { 'nameForbiddenTeste': true }
    }
    return null;
  }
}
