import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class BurguerService {

    baseUrl = environment.apiUrl + 'api/v1/products'

    constructor(private httpClient: HttpClient){}

    findAllByProduct(category: any): Observable<any> {
        const params = new HttpParams().set('category', category);
        return this.httpClient.get<any>(this.baseUrl + '/category', {params});
    }

    updateCar(id: any): Observable<any> {
        return this.httpClient.put<any>(this.baseUrl + '/car/' + id, null)
    }

    deleteCar(id: any): Observable<any> {
        return this.httpClient.put<any>(this.baseUrl + '/car/delete/' + id, null)
    }

    findAllCar(): Observable<any>{
        return this.httpClient.get<any>(this.baseUrl + '/join/car') 
    }

}