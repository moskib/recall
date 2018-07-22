import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: any[] = [
    { name: 'Albert Einstein' },
    { name: 'Steve Jobs' },
    { name: 'Bill Gates' },
    { name: 'Grant Cardone' },
    { name: 'Jeff Bezos' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
