import { AuthorService } from './../services/author.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors$;

  constructor(private service: AuthorService) {
  }

  ngOnInit(): void {
    // this.authors$ = this.service.list(
    //   'authors',
    //   query =>
    //     query.orderByChild('name')).valueChanges();
    this.authors$ = this.service.getByChild('name');
  }
}
