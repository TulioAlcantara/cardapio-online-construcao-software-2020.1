import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";
import { CatalogItemModel } from "../../models/catalogItem/catalogItem.model";
import { StoreModel } from "../../models/store/store.model";

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private firestore: AngularFirestore) {}

  getCatalogItensOfStore(storeId) {
    return this.firestore.collection("stores").doc(storeId).collection("catalogList").get();
    // .subscribe((snapshots) => {
    //   if (snapshots.docs.length > 0) {
    //     resolve(
    //       snapshots.docs.map((snapshot) =>
    //         CatalogItemModel.fromFirestoreSnapshot(snapshot)
    //       )
    //     );
    //   }
    //   resolve([]);
  }

  // getStore (storeId) {
  //   return this.firestore.collection("stores").doc(storeId).get();
  // }
}
