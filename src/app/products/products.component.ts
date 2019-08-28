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
  cartItem: Item;
  itemToEdit: Item;
  showPostForm: boolean = false;
  showEditForm: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.shoppingCart = response));
    console.log(this.shoppingCart);
  }

  setItemToEdit(item: Item): void {
    this.itemToEdit = item;
  }

  togglePostForm(): void {
    console.log("togglepostform has been clicked");
    this.showPostForm = !this.showPostForm;
  }
  toggleEditForm(): void {
    this.showEditForm = !this.showEditForm;
  }

  addCartItem(form: NgForm): void {
    this.cartService.postNewItem(form.value).subscribe(response => {
      this.shoppingCart = response;
    });
  }

  deleteItem(id: number): void {
    this.cartService.deleteItem(id).subscribe(response => {
      this.shoppingCart = response;
    });
    console.log("delete button is working");
  }

  updateItem(form: NgForm, id: number): void {
    console.log("i have been clicked");
    this.cartService
      .putItemChanges(form.value, id)
      .subscribe(response => (this.shoppingCart = response));
    this.toggleEditForm;
  }
}
