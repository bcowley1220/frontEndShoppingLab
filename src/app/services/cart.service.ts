import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "../interfaces/item";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:5000/shoppingCart");
  }
  postNewItem(item: Item): Observable<any> {
    return this.http.post("http://localhost:5000/shoppingCart", item);
  }

  putItemChanges(quantity: number, id: number): Observable<any> {
    return this.http.put(`http://localhost:5000/shoppingCart/${id}`, quantity);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/shoppingCart/${id}`);
  }
}

// @Injectable({
//   providedIn: "root"
// })
// export class ApiService {
//   constructor(private http: HttpClient) {}

//   getRequest(): Observable<any> {
//     return this.http.get("http://localhost:5000/people");
//   }

//   postRequest(person: Person): Observable<any> {
//     return this.http.post("http://localhost:5000/people", person);
//   }

//   putRequest(person: Person): Observable<any> {
//     return this.http.put(`http://localhost:5000/people/${person.id}`, person);
//   }

//   deleteRequest(id: string): Observable<any> {
//     return this.http.delete(`http://localhost:5000/people/${id}`);
//   }
// }
