import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartItemModel } from "../../models/cartItem/cartItem.model";

@Component({
  selector: "app-checkout-modal",
  templateUrl: "./checkout-modal.component.html",
  styleUrls: ["./checkout-modal.component.scss"],
})
export class CheckoutModalComponent implements OnInit {
  cartTotalValue: number = 0;
  cartList: Array<CartItemModel>;
  whatsAppLink: string;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.cartList = data.cartList;
    this.whatsAppLink = data.whatsAppLink;
    this.cartTotalValue = data.cartTotalValue
  }

  ngOnInit(): void {
    
  }

}
