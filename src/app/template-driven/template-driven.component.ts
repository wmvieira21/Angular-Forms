import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  /*Another way of getting the information of the form before submiting*/
  @ViewChild('formReference') signUpForm: NgForm;

  defaultQuestion = "pet";
  answerQuestion = "";
  genders = ['male', 'female'];
  submitted = false;

  userSaved = {
    name: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }



  suggestUsername() {
    /*Example of how to set value to the form by setValue.
    Note: We gotta pass all structure of the form (all inputs and modelGroup)
    dataUser is the modeGroup defined in the html.

      this.signUpForm.setValue(
        {dataUser: {
         username: 'william',
         email: 'teste@teste.com'
       },
       secret: 'teacher',
       answerQuestion: 'default',
       gender: 'female'
     }
     );*/

    /*Better aproach*/
    this.signUpForm.form.patchValue({
      dataUser: {
        username: 'william'
      }
    });
  }

  onSubmit(formValues: NgForm) {
    console.log(formValues);
    //console.log(this.signUpForm);

    this.submitted = true;
    this.userSaved.name = formValues.value.dataUser.username;
    this.userSaved.email = formValues.value.dataUser.email;
    this.userSaved.secret = formValues.value.secret;
    this.userSaved.answer = formValues.value.answerQuestion;
    this.userSaved.gender = formValues.value.gender;

    /*Reset the form as weel as its state*/
    formValues.reset();
  }
}
