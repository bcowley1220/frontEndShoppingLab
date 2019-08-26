import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CartService } from "./services/cart.service";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { FormsModule, NgForm } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
