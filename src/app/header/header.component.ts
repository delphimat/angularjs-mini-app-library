import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li routerLinkActive="active">
            <a routerLink="books">Livres</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li routerLinkActive="active" *ngIf="!isAuth">
            <a routerLink="auth/signup">Créer un compte</a>
          </li>
          <li routerLinkActive="active" *ngIf="!isAuth">
            <a routerLink="auth/signin">Connexion</a>
          </li>
          <li>
            <a (click)="onSignOut()"
               style="cursor:pointer"
               *ngIf="isAuth">Déconnexion</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth : boolean;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
