import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class QuotesService extends DataService{

  constructor(db: AngularFireDatabase) { 
    super('quotes', db);
  }
}
