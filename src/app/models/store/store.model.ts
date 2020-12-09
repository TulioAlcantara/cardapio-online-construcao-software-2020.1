import { CatalogItemModel } from '../catalogItem/catalogItem.model'

export class StoreModel{
    id: string;
    name: string;
    description: string;
    adress: string;
    catalogList: Array<CatalogItemModel>;

    static fromFirestoreSnapshot(snapshot){
        const store = new StoreModel();
        store.name = snapshot.get('name');
        store.description = snapshot.get('description');
        store.adress = snapshot.get('adress');
        store.id = snapshot.id;

        // let snapshotCatalogItens = snapshot.get('catalogItens');
        // snapshotCatalogItens.forEach(snapshotCatalogItem => {
        //     store.catalogList.push(CatalogItemModel.fromFirestoreSnapshot(snapshotCatalogItem));
        // });

        return store;
      }
}