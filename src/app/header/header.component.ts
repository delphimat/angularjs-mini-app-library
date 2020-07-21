import { Component, OnInit } from '@angular/core';

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
          <li routerLinkActive="active">
            <a routerLink="auth/signup">Créer un compte</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="auth/signin">Connexion</a>
          </li>
        </ul>

      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
