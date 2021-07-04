import { identifierModuleUrl, isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements Resolve<any> {

  onUsersChanged: BehaviorSubject<any>;

  constructor(
    private firestore: AngularFirestore
  ) { 
    this.onUsersChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {    
    
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.todosUsers()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  todosUsers(){
    return new Promise((resolve, reject) => {
      this.firestore.collection("users").snapshotChanges().subscribe(action => {
          console.log(`SERVICE`)
        let data = action.map(item => {
          return {...(item.payload.doc.data() as object), id: item.payload.doc.id }
        })
        this.onUsersChanged.next(data);
        resolve(data);
      })
    })
  }

  todosComWhereUsers(){
    return new Promise((resolve, reject) => {
      this.firestore.collection("users").ref.where("cpf","==","333.333.333-55").onSnapshot(action => {
          console.log(`SERVICE`)
        let data = action.docChanges().map(item => {
          return {...(item.doc.data() as object), id: item.doc.id }
        })
        this.onUsersChanged.next(data);
        resolve(data);
      })
    })
  }

  userById(){
    return new Promise((resolve, reject) => {
      this.firestore.collection("users").doc("21mRZPHSYxXpBsjfRP3U").snapshotChanges().subscribe(action => {
        console.log(`SERVICE`)
        var data = [] ;
        data.push(action.payload.data());
        this.onUsersChanged.next(data);
        resolve(data);
      })
    })
  }

  insertUser(data: any) {
    return new Promise((resolve, reject) => {
      this.firestore.collection(`users`).add(data).then(docRef => {
        this.firestore.doc(`users/${docRef.id}`).update({id: docRef.id});

      });
    })
  }

  updateUser(id: any, data: any){
    return new Promise((resolve, reject) => {
      this.firestore.doc(`users/1MiJbk6rlOqtEPg1rpoj`).update({cpf: "3333333333333333333333"});
    })       
  }

  deleteUser(id: any){
    return new Promise((resolve, reject) => {
      this.firestore.doc(`users/1MiJbk6rlOqtEPg1rpoj`).delete();
    })       
  }
  
}
