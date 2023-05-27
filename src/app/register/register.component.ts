import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder){}

  get nombre(){
    return this.formRegister.get('nombre') as FormControl;
  }
  get apellido(){
    return this.formRegister.get('apellido') as FormControl;
  }
  get dni(){
    return this.formRegister.get('dni') as FormControl;
  }
  get sex(){
    return this.formRegister.get('sex') as FormControl;
  }
  get eMail(){
    return this.formRegister.get('eMail') as FormControl;
  }
  get password(){
    return this.formRegister.get('password') as FormControl;
  }
  get password2(){
    return this.formRegister.get('password2') as FormControl;
  }

  formRegister = this.fb.group({
    'nombre': ['', Validators.required],
    'apellido': ['', Validators.required],
    'dni': ['', Validators.required],
    'sex': ['', Validators.required],
    'eMail': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', Validators.required],
  },
  {
    validators: ConfirmedValidator('password', 'password2'),
  })

  registrar(){
    console.log(this.formRegister.value);
  }
}
