import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private _firestore: AngularFirestore) {}

  getStore(storeId) {
    return this._firestore.collection("stores").doc(storeId).get();
  }

  getStores() {
    return this._firestore.collection("stores").get();
  }
}
