import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  quotes$;
  quoteList: AngularFireList<{}>;

  constructor(db: AngularFireDatabase) {
    this.quotes$ = db.list('/quotes').valueChanges();
  }
}
