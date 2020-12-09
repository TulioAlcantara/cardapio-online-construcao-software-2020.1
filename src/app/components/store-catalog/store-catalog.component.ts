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
import { StoreModel } from "src/app/models/store/store.model";
import { CartItemModel } from "../../models/cartItem/cartItem.model";
import { CatalogItemModel } from "../../models/catalogItem/catalogItem.model";

@Component({
  selector: "app-store-catalog",
  templateUrl: "./store-catalog.component.html",
  styleUrls: ["./store-catalog.component.scss"],
})
export class StoreCatalogComponent implements OnInit {
  store: StoreModel = new StoreModel();
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

  getStoreInfo() {
    this._storeService.getStore("2HWV3WYwqUzasmLDGYfB").subscribe((storeSnapshot) => {
      this.store = StoreModel.fromFirestoreSnapshot(storeSnapshot);
      this.storeLoading = false;
    });
  }

  getCatalogItensOfStore() {
    this._catalogService
      .getCatalogItensOfStore("2HWV3WYwqUzasmLDGYfB")
      .subscribe((catalogListSnapshot) => {
        if (!catalogListSnapshot.empty) {
          catalogListSnapshot.forEach((catalogItemSnapshot) => {
            this.catalogList.push(CatalogItemModel.fromFirestoreSnapshot(catalogItemSnapshot));
          });
          this.catalogListLoading = false;
        }
      });
  }

  openCheckoutModal(): void {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      data: {
        cartList: this.cartList,
        whatsAppLink: this.createWhatsAppLink(),
        cartTotalValue: this.calculateTotalValue(),
      },
    });
  }

  handleQuantityChanges(event, id): void {
    let newItemQuantity: number = parseInt(event.target.value);
    let selectedItemCatalogId: string = id;
    let newCartItem: CartItemModel = this.newCartItemByCatalogId(selectedItemCatalogId);

    newCartItem.quantity = newItemQuantity;

    this.addItemToCart(newCartItem);
    this.updateCheckoutValue();
    this.btnCheckoutVisibility();
  }

  newCartItemByCatalogId(catalogId): CartItemModel {
    let catalogItem: CatalogItemModel = this.catalogList.find((item) => item.id == catalogId);
    let newCartItem: CartItemModel;
    newCartItem = {
      name: catalogItem.name,
      catalogId: catalogItem.id,
      value: catalogItem.value,
      quantity: 0,
      picture: catalogItem.picture,
    };
    return newCartItem;
  }

  updateCheckoutValue(): void {
    let checkoutValue: number = 0;
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
    let cartItemAlreadyExists: boolean = this.cartList.some(
      (item) => item.catalogId == cartItem.catalogId
    );
    if (cartItemAlreadyExists) {
      let cartItemOnList: CartItemModel = this.cartList.find(
        (item) => item.catalogId == cartItem.catalogId
      );
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
    if (this.cartList.length) {
      this.cartIsEmpty = false;
      return;
    }

    this.cartIsEmpty = true;
    return;
  }

  createWhatsAppLink(): string {
    let whatsAppLink: string;
    let storeNameFormated: string = this.store.name.split(' ').join('%20');
    let messageText: string = `Pedido%20da%20loja%20${storeNameFormated}%0D%0A%0D%0A`;
    this.cartList.forEach((cartItem) => {
      messageText += `${cartItem.quantity}%20x%20${cartItem.name}%20=>%20R$%20${cartItem.value}%0D%0A`;
    });
    messageText += `%0D%0ATOTAL%20=>%20${this.calculateTotalValue()}`;
    whatsAppLink = `https://wa.me/${this.store.phone}?text=${messageText}`;
    return whatsAppLink;
  }

  calculateTotalValue(): number {
    let cartTotalValue: number;
    this.cartList.forEach((cartItem) => {
      cartTotalValue += cartItem.value * cartItem.quantity;
    });
    return cartTotalValue;
  }
}
