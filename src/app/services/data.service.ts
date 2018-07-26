import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireAction,
  DatabaseSnapshot
} from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private collection: string,
    private db: AngularFireDatabase) {
  }

  arrayActionMapper(arr: AngularFireAction<DatabaseSnapshot<{}>>[]) {
    return arr.map(c => ({
      key: c.key,
      value: c.payload.val()
    }));
  }

  getAll() {
    return this.db.list(this.collection)
      .snapshotChanges().pipe(
        map((changes => {
          return this.arrayActionMapper(changes);
        }))
      );
  }

  getByChild(child: string) {
    return this.db.list(this.collection,
      query => query.orderByChild(child)).snapshotChanges().pipe(
        map((changes => {
          return this.arrayActionMapper(changes);
        }))
      );
  }

  getByChildEqualTo(child: string, value: string) {
    return this.db.list(
      this.collection,
      query => query.orderByChild(child)
        .equalTo(value)).snapshotChanges().pipe(
          map((changes => {
            return this.arrayActionMapper(changes);
          })));
  }
}
