import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Helper } from '../auth/helper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  phoneNumber: string='';
  password: string='';
  formdata: FormGroup;
  private regExpression = '^(\\+237 )?6[0-9]{8}$';

  constructor(private fb: FormBuilder) {
    this.formdata = fb.group({
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.regExpression),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  get f() {
    return this.formdata.controls;
  }

  ngOnInit() {
    this.formdata = this.fb.group({
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.regExpression),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  forgotPassword() {
    Helper.isNextStep = true;
  }

  onClickLogin(data:any){
    Helper.isNextStep = true;
    this.phoneNumber = data.phoneNumber;
    this.password = data.password;
  }
}
