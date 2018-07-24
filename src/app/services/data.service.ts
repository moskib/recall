import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private collection: string,
    private db: AngularFireDatabase) {

  }

  getAll() {
    return this.db.list(this.collection).valueChanges();
  }

  getByChild(child: string) {
    return this.db.list(this.collection,
      query => query.orderByChild(child)).valueChanges();
  }

  getByChildEqualTo(child: string, value: string){
    return this.db.list(this.collection, query => query.orderByChild(child).equalTo(value)).valueChanges();
  }
}
