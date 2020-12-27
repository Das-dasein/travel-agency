import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login.w-50.ml-auto.mr-auto"',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    login: '',
    password: ''
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  login() {
    return this.auth.login(this.form.value.login, this.form.value.password).subscribe(a => console.log(a));
  }
}
