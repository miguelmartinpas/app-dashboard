import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export class AngularPathType {
  path: string;
  value: Object;
}

// https://alligator.io/angular/firebase-crud-operations/

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private collection: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  get = (path: string): AngularFireList<any> => {
    this.collection = this.db.list(path);
    return this.collection;
  }

  // set = (pathItem: AngularPathType): string => {
  //   const key = this.db.child(pathItem.path).push().key;
  //   this.db.database().ref(`{$pathItem.path}/${key}`).set(pathItem.value);
  //   return key;
  // }
  //
  // update = (paths: Array<pathItem>): Promise<any> => {
  //
  //   const pathsToUpdate = Array.isArray(paths) ? paths : [paths];
  //
  //   const updates = pathsToUpdate.reduce((acc, current) => {
  //     acc[current.path] = current.value;
  //   }, {});
  //
  //   return this.db.ref().update(updates);
  // }
  //
  // remove = (path: string): Promise<any> => this.db.ref().child(path).remove();

}
