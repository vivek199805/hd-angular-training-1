import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
    });

  }

  login(){
   const username = this.loginForm.get('username').value;
   console.log(username);
   if(username){
    localStorage.setItem('name', username);
    this.router.navigate(['/search']);
   }

  }

  reset(){
    this.loginForm.reset();
  }
}
