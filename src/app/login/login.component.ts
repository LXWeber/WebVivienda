import { Component, } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder){}

  get eMail(){
    return this.formUser.get('eMail') as FormControl;
  }
  get password(){
    return this.formUser.get('password') as FormControl;
  }

  formUser = this.fb.group({
    'eMail': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.required],
  })

  ingresar(){
    console.log(this.formUser.value);
  }

}
