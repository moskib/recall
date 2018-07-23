import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors$;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.authors$ = this.db.list(
      'authors',
      query =>
        query.orderByChild('name')).valueChanges();
  }
}
