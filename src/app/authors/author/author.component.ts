import { QuotesService } from './../../services/quotes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author;
  quotes$;

  constructor(private route: ActivatedRoute,
    private service: QuotesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.author = this.titleCase(
        params.get('author')
          .replace('_', ' '));
    });

    this.quotes$ = this.service.getByChildEqualTo('author', this.author);
  }

  // might need to put this in a class of its own later:
  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  // When the user clicks on a specific quote:
  onClick(currentQuote) {
    console.log(currentQuote);
  }
}
