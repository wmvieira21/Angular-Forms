import { NgForOf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-form-td',
  templateUrl: './assignment-form-td.component.html',
  styleUrls: ['./assignment-form-td.component.css']
})
export class AssignmentFormTdComponent {

  @ViewChild('formRef') formRef: NgForm;

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.formRef);
  }
}
