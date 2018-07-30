import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from './../../services/quotes.service';
import { StringService } from '../../services/string.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author;
  quotes$;

  constructor(private route: ActivatedRoute,
    private service: QuotesService, private strService: StringService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.author = this.strService.titleCase(
        params.get('author')
          .replace('_', ' '));
    });

    this.quotes$ = this.service.getByChildEqualTo('author', this.author);
  }

  // When the user clicks on a specific quote:
  onClick(currentQuote) {
    console.log(currentQuote);
  }
}
