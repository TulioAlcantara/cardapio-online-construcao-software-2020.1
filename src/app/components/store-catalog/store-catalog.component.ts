//ANGULAR
import { Component, OnInit } from "@angular/core";

//COMPONENTS
import { CheckoutModalComponent } from "../checkout-modal/checkout-modal.component";

//MATERIAL
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

//SERVICES
import { CatalogService } from "src/app/services/catalog/catalog.service";
import { StoreService } from "src/app/services/store/store.service";

//MODELS
import { StoreModel } from 'src/app/models/store/store.model';
import { CartItemModel } from "../../models/cartItem/cartItem.model";
import { CatalogItemModel } from "../../models/catalogItem/catalogItem.model";

@Component({
  selector: "app-store-catalog",
  templateUrl: "./store-catalog.component.html",
  styleUrls: ["./store-catalog.component.scss"],
})
export class StoreCatalogComponent implements OnInit {
  store: StoreModel = new StoreModel();;
  storeLoading: boolean = true;

  checkoutValue: number;
  checkoutValueOutput: string;
  
  cartList = Array<CartItemModel>();
  cartIsEmpty: boolean = true;
  
  catalogList = Array<CatalogItemModel>();
  catalogListLoading: boolean = true;

  constructor(
    public dialog: MatDialog,
    private _catalogService: CatalogService,
    private _storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getStoreInfo();
    this.getCatalogItensOfStore();
  }

  getStoreInfo(){
    this._storeService.getStore('2HWV3WYwqUzasmLDGYfB').subscribe((storeSnapshot) => {
      this.store = StoreModel.fromFirestoreSnapshot(storeSnapshot);
      this.storeLoading = false;
    });
  }

  getCatalogItensOfStore(){
    this._catalogService.getCatalogItensOfStore('2HWV3WYwqUzasmLDGYfB').subscribe((catalogListSnapshot) => {
      if(!catalogListSnapshot.empty){
        catalogListSnapshot.forEach(catalogItemSnapshot =>{
          this.catalogList.push(CatalogItemModel.fromFirestoreSnapshot(catalogItemSnapshot));
        });
        this.catalogListLoading = false;
      }
    })
  }

  openCheckoutModal(): void {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      data: this.cartList,
    });
  }

  handleQuantityChanges(event, id): void {
    let newItemQuantity = parseInt(event.target.value);
    let selectedItemCatalogId = id;
    let newCartItem = this.newCartItemByCatalogId(selectedItemCatalogId);

    newCartItem.quantity = newItemQuantity;

    this.addItemToCart(newCartItem);
    this.updateCheckoutValue();
    this.btnCheckoutVisibility();
    console.log(this.cartList);
  }

  newCartItemByCatalogId(catalogId): CartItemModel {
    let catalogItem = this.catalogList.find((item) => item.id == catalogId);
    let newCartItem: CartItemModel;
    newCartItem = {
      name: catalogItem.name,
      catalogId: catalogItem.id,
      value: catalogItem.value,
      quantity: 0,
    };
    return newCartItem;
  }

  updateCheckoutValue(): void {
    let checkoutValue = 0;
    this.cartList.forEach((cartItem) => {
      checkoutValue += cartItem.quantity * cartItem.value;
    });
    if (this.cartList.length) {
      this.checkoutValueOutput = ` ($${checkoutValue})`;
      return;
    }
    this.checkoutValueOutput = "";
    return;
  }

  addItemToCart(cartItem): void {
    if (cartItem.quantity == 0) {
      this.removeItemFromCart(cartItem);
      return;
    }
    let cartItemAlreadyExists = this.cartList.some((item) => item.catalogId == cartItem.catalogId);
    if (cartItemAlreadyExists) {
      let cartItemOnList = this.cartList.find((item) => item.catalogId == cartItem.catalogId);
      cartItemOnList.quantity = cartItem.quantity;
    } else {
      this.cartList.push(cartItem);
    }

    return;
  }

  removeItemFromCart(cartItem): void {
    this.cartList.splice(this.cartList.findIndex((item) => item.catalogId == cartItem.catalogId));
    return;
  }

  btnCheckoutVisibility(): void {
    console.log(this.cartList);
    if (this.cartList.length) {
      this.cartIsEmpty = false;
      return;
    }

    this.cartIsEmpty = true;
    return;
  }
}
