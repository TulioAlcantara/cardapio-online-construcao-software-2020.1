import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { CatalogItemModel } from "../../models/catalogItem/catalogItem.model";

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private firestore: AngularFirestore) {}

  getCatalogItensOfStore(storeId) {
    return new Promise<Array<CatalogItemModel>>((resolve, reject) => {
      this.firestore
        .collection("stores")
        .doc(storeId)
        .collection("catalog-items")
        .get()
        .subscribe((snapshots) => {
          if (snapshots.docs.length > 0) {
            resolve(
              snapshots.docs.map((snapshot) =>
                CatalogItemModel.fromFirestoreSnapshot(snapshot)
              )
            );
          }
          resolve([]);
        });
    });
  }
}
