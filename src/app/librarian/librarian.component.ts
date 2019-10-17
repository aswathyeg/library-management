import { Component, OnInit } from '@angular/core';
import { Members } from '../shared/members.model';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
members:Members[]=[new Members('Aswathy',2),
new Members('Sita',3)];
  constructor() { }

  ngOnInit() {
  }

}
