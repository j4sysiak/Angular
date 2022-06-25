import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from './product-response';
import {SubredditModel} from '../subreddit/subreddit-response';
import {PolicyModel} from '../policy/policy-model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<ProductModel>> {
    return this.http.get<Array<ProductModel>>(this.baseUrl + 'api/product');
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.baseUrl + 'api/product/' + id);
  }

  getProductByProductName(theName: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.baseUrl + 'api/product/by-product-name/' + theName);
  }

  createProduct(productModel: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl + 'api/product', productModel);
  }
}

