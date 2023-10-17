import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    hide: boolean = false;
  
    constructor(private fb: FormBuilder) {
    }
  
    ngOnInit() {
    }
  
    loginForm: FormGroup = this.fb.group({
      pawprint: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(12)]]
    })
  
  
    onLogin() {
      if (!this.loginForm.valid) {
        return;
      }
      console.log(this.loginForm.value);
    }
  
  }




