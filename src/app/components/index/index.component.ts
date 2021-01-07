import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { StoreModel } from "src/app/models/store/store.model";
import { StoreService } from "src/app/services/store/store.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  //STORES
  storeList = Array<StoreModel>();

  constructor(private _storeService: StoreService, private _storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.loadStores();
  }

  loadStores(): void {
    this._storeService.getStores().subscribe((storeListSnapshot) => {
      if (!storeListSnapshot.empty) {
        storeListSnapshot.forEach((storeSnapshot) => {
          let store = StoreModel.fromFirestoreSnapshot(storeSnapshot);
          this._storage.ref(store.logo).getDownloadURL().subscribe(url =>{
            store.logo = url;
          })
          this.storeList.push(store);
        });
        console.log(this.storeList)
      }
    });
  }
}
