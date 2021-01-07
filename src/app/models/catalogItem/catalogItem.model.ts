import { AngularFireStorage } from "@angular/fire/storage";

export class CatalogItemModel {
  name: string;
  description: string;
  picture: string;
  pictureUrl: string;
  id: string;
  value: number;
  category: string;
  quantity: number = 0;

  static fromFirestoreSnapshot(snapshot) {
    const catalogItem = new CatalogItemModel();
    catalogItem.name = snapshot.get("name");
    catalogItem.description = snapshot.get("description");
    catalogItem.picture = snapshot.get("picture");
    catalogItem.id = snapshot.id;
    catalogItem.value = snapshot.get("value");
    catalogItem.category = snapshot.get("category");

    return catalogItem;
  }

  static getPictureUrl(picturePath: string) {}
}
