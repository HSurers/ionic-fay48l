import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class DenemeService {

  constructor(private firestore: AngularFirestore,
		public afAuth: AngularFireAuth) { }
  
  
  
  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  create_NewStudent(record) {
    return this.firestore.collection('faturas').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('faturas').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('faturas/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('faturas/' + record_id).delete();
  }

}