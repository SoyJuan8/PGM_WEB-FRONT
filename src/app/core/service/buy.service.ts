import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class BuyService {

    baseUrl = environment.apiUrl + 'api/v1/orders'

    constructor(private httpClient: HttpClient){ }

    buyProduct(clientId: any, productId: any): Observable<any>{
        return this.httpClient.post<any>(this.baseUrl + '/buy/' + clientId + '/' + productId, null);
    }

    buyProductCar(clientId: Number, productId: Number[]): Observable<any>{
      return this.httpClient.post<any>(this.baseUrl + '/' + clientId, productId);
    }

  }