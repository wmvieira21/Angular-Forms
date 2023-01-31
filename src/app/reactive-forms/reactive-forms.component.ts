import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup;
  forbiddenNames = ['anna', 'chris'];


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidation.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail as AsyncValidatorFn)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNamesValidation(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenNames.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  /*Asynchronous validator*/
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'williamvieira334@gmail.com') {
          resolve({ 'forbiddenEmail': true });
        } else {
          return resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
