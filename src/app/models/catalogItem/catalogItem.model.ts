export class CatalogItemModel {
  name: string
  description: string
  picture: string
  id: string
  value: number
  category: string
  
  static fromFirestoreSnapshot(snapshot){
    const catalogItem = new CatalogItemModel();
    catalogItem.name = snapshot.get("name");
    catalogItem.description = snapshot.get("description");
    catalogItem.picture = snapshot.get("picture");
    catalogItem.id = snapshot.id;
    catalogItem.value = snapshot.get("value");
    catalogItem.category = snapshot.get("category");

    return catalogItem;
  }
}
