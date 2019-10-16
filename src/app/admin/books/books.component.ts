import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books:Book[]=[new Book
  ('Test book','this is simply test','me','https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg'),
new Book
('Test book','this is simply test','me','https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
