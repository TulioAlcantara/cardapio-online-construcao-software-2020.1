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
  catalogList = [
    {
      name: "Burger with fries",
      description: "Ipsum LoremIpsum LoremIpsum LoremIpsum LoremIpsum Lorem",
      pictureUrl:
        "https://img.itdg.com.br/tdg/images/blog/uploads/2020/05/shutterstock_1710468256.jpg",
      id: 0,
      value: 10,
    },
    {
      name: "Pasta",
      description: "Ipsum LoremIpsum LoremIpsum LoremIpsum LoremIpsum Lorem",
      pictureUrl:
        "https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591",
      id: 1,
      value: 15,
    },
  ];
  cartList = [];
  checkoutValue: number;
  checkoutValueOutput: string;
  constructor(
    public dialog: MatDialog,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.catalogService
      .getCatalogItensOfStore("2HWV3WYwqUzasmLDGYfB")
      .then((itens) => {console.log(itens)});
  }

  openCheckoutModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.cartList;
    const dialogRef = this.dialog.open(CheckoutModalComponent, dialogConfig);
    // dialogRef.afterClosed()
  }

  handleQuantityChanges(event, id): void {
    let newItemQuantity = parseInt(event.target.value);
    let selectedItemCatalogId = id;
    let newCartItem = this.newCartItemByCatalogId(selectedItemCatalogId);

    newCartItem.quantity = newItemQuantity;

    this.addItemToCart(newCartItem);
    this.updateCheckoutValue();
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
    // this.cartList.reduce((checkoutValue, currentValue) => (checkoutValue+(currentValue.quantity * currentValue.value)))
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
  }

  removeItemFromCart(cartItem): void {
    this.cartList.splice(
      this.cartList.findIndex((item) => item.catalogId == cartItem.catalogId),
      1
    );
    return;
  }
}
