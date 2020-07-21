import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  template: `
    <p>
      book-list works!
    </p>
  `,
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
