import { AfterViewInit, Component, OnInit } from "@angular/core";

//SERVICES
import { StoreService } from "src/app/services/store/store.service";
import { AngularFireStorage } from "@angular/fire/storage";

//MODELS
import { StoreModel } from "src/app/models/store/store.model";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit, AfterViewInit {
  //STORES
  storeList = Array<StoreModel>();

  constructor(private _storeService: StoreService, private _storage: AngularFireStorage) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() :void {
    this.loadStores();
  }

  loadStores(): void {
    this._storeService.getStores().subscribe((storeListSnapshot) => {
      if (!storeListSnapshot.empty) {
        storeListSnapshot.forEach((storeSnapshot) => {
          let store = StoreModel.fromFirestoreSnapshot(storeSnapshot);
          this._storage.ref(store.logo).getDownloadURL().subscribe(url =>{
            store.logoUrl = url;
          })
          this.storeList.push(store);
        });
      }
    });
  }
}
