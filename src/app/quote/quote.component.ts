import { StringService } from './../services/string.service';
import { QuotesService } from './../services/quotes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteKey;
  quote$;
  author;

  constructor(private route: ActivatedRoute,
    private dbService: QuotesService,
    private strService: StringService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.author = this.strService
          .titleCase(
            params.get('author').replace('_', ' ')
          );
        this.quoteKey = params.get('quote');
      });

    this.quote$ = this.dbService
      .getChildById(this.quoteKey);
  }

}
