import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CartService } from "../services/cart.service";
import { Item } from "../interfaces/item";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  shoppingCart: Item[];
  newItem: Item;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.shoppingCart = response));
    console.log(this.shoppingCart);
  }
}
