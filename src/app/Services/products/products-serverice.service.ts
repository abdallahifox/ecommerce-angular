import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {   Observable, forkJoin } from 'rxjs';
import { productType } from 'src/app/shared/types';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductsServericeService {
   products : productType[] = [] 
   categories:string[] = []
  constructor(private http:HttpClient) { }


  getAllProducts(){
   forkJoin([
    this.http.get<productType[]>(`${environment.API_URL}/products`),
    this.http.get<string[]>(`${environment.API_URL}/products/categories`)
   ]).subscribe(([products,categories])=>{
    this.products = products
    this.categories = categories
   })
  }


  filterProductsByCategory(categoryName:string,sort?:string){
    let param = new HttpParams()
    if(sort){
      param = param.append('sort',sort)
    }
      this.http.get<productType[]>(`${environment.API_URL}/products/category/${categoryName}`,{
        params:param
      }).subscribe(filteredProducts => this.products = filteredProducts)
    
  }

  sortProducts(sortName:string){
    let param = new HttpParams()
        param = param.append('sort',sortName)
    this.http.get<productType[]>(`${environment.API_URL}/products`,{
      params:param
    }).subscribe(sortedProducts => this.products = sortedProducts)
  }

  getProductById(id:number): Observable<productType>{
    return this.http.get<productType>(`${environment.API_URL}/products/${id}`)
  }
}
