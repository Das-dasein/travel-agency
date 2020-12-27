import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    form = this.fb.group({
      login: '',
      password: ''
    });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  register() {
    this.auth.registration(this.form.value.login, this.form.value.password).subscribe(() => {
      
    })
  }
}
