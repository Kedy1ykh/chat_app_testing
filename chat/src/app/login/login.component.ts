import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });
  submitted = false;
  
  

  constructor(private fb: FormBuilder, private as: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      id: ['']
    });
  }

  onSubmit(): void {
    this.as.login(this.loginForm.value)
    this.router.navigateByUrl('/chat');
  }

}
