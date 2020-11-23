import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartItemModel } from "../../models/cartItem/cartItem.model";

@Component({
  selector: "app-checkout-modal",
  templateUrl: "./checkout-modal.component.html",
  styleUrls: ["./checkout-modal.component.scss"],
})
export class CheckoutModalComponent implements OnInit {
  totalValue = 0;
  cartList = [];
  modalTableColumns: string[] = ['name', 'quantity', 'value'];
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.cartList = data;
  }

  ngOnInit(): void {
    this.calculateTotalValue();
  }

  calculateTotalValue(){
    
    this.cartList.forEach(cartItem => {
      this.totalValue += cartItem.value * cartItem.quantity;
    });
  }
}
