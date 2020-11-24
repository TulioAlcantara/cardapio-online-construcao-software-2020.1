import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CheckoutModalComponent } from "../checkout-modal/checkout-modal.component";
import { CatalogItemModel } from "../../models/catalogItem/catalogItem.model";
import { CartItemModel } from "../../models/cartItem/cartItem.model";
import { CatalogService } from "src/app/services/catalog/catalog.service";

@Component({
  selector: "app-store-catalog",
  templateUrl: "./store-catalog.component.html",
  styleUrls: ["./store-catalog.component.scss"],
})
export class StoreCatalogComponent implements OnInit {
  catalogList = [];
  cartList = [];
  checkoutValue: number;
  checkoutValueOutput: string;
  cartIsEmpty = true;
  constructor(
    public dialog: MatDialog,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.catalogService
      .getCatalogItensOfStore("2HWV3WYwqUzasmLDGYfB")
      .then((itens) => (this.catalogList = itens));
  }

  openCheckoutModal(): void {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      data: this.cartList,
    });
    // dialogRef.afterClosed()
  }

  handleQuantityChanges(event, id): void {
    let newItemQuantity = parseInt(event.target.value);
    let selectedItemCatalogId = id;
    let newCartItem = this.newCartItemByCatalogId(selectedItemCatalogId);

    newCartItem.quantity = newItemQuantity;

    this.addItemToCart(newCartItem);
    this.updateCheckoutValue();
    this.btnCheckoutVisibility()
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
    let cartItemAlreadyExists = this.cartList.some(
      (item) => item.catalogId == cartItem.catalogId
    );
    if (cartItemAlreadyExists) {
      let cartItemOnList = this.cartList.find(
        (item) => item.catalogId == cartItem.catalogId
      );
      cartItemOnList.quantity = cartItem.quantity;
    } else {
      this.cartList.push(cartItem);
    }

    return;
  }

  removeItemFromCart(cartItem): void {
    this.cartList.splice(
      this.cartList.findIndex((item) => item.catalogId == cartItem.catalogId)
    );
    return;
  }

  btnCheckoutVisibility(): void{
    console.log(this.cartList)
    if(this.cartList.length){
      this.cartIsEmpty = false;
      return;
    }

    this.cartIsEmpty = true;
    return;
  }
}
