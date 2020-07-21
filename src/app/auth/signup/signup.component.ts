import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  template: `
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <h2>Creer un compte</h2>
        <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" formControlName="email">
          </div>
          <div class="form-group">
            <label for="email">Password</label>
            <input type="text" id="password" class="form-control" formControlName="password">
          </div>
          <button class="btn btn-primary" type="submit" [disabled]="signUpForm.invalid">Creer mon compte</button>
        </form>

        <p class="text-danger">
        {{errorMessage }}
        </p>

      </div>
    </div>
  `,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signUpForm = this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;

    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
