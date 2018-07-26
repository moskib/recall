import { DataService } from './data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends DataService {

  constructor(db: AngularFireDatabase) {
    super('authors', db);
  }
}
