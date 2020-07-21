import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header></app-header>
    <div class="container">
      <router-outlet>

      </router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyD0HPUg1b9Git4EHgCAc481hcwFLL6LMDg",
      authDomain: "biblio-a.firebaseapp.com",
      databaseURL: "https://biblio-a.firebaseio.com",
      projectId: "biblio-a",
      storageBucket: "biblio-a.appspot.com",
      messagingSenderId: "1051407585359",
      appId: "1:1051407585359:web:ab8a4078a7bececc9c1a3a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
