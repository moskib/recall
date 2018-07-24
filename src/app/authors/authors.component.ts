import { AuthorService } from './../services/author.service';
import { Component, OnInit } from '@angular/core';

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
    this.authors$ = this.service.getByChild('name');
  }
}
