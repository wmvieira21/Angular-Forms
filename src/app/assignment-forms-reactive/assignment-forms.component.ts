import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-assignment-forms-reactive',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsReactiveComponent implements OnInit {

  project: FormGroup;

  ngOnInit() {
    this.project = new FormGroup({
      'projectData': new FormGroup({

        //'projectName': new FormControl(null, [Validators.required, this.validationProjectName.bind(this)]),
        //'projectName': new FormControl('default', [Validators.required], this.asyncValidationProjectName as AsyncValidatorFn),
        'projectName': new FormControl(null, [Validators.required, CustomValidators.validationProjectName], CustomValidators.asyncValidationProjectName as AsyncValidatorFn),
        'emailAddress': new FormControl(null, [Validators.email, Validators.required]),
        'projectStatus': new FormControl('Critical')
      })
    });
  }
  onSubmit() {
    console.log(this.project.get('projectData').value);
    console.log(this.project);
  }
}
