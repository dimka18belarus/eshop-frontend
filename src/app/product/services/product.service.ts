import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Product} from "../product";
import {ServerSettingsService} from "../../shared/server-settings/server-settings.service";

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = '/api/products';  // URL to web api

  constructor(private http: Http, private server: ServerSettingsService) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.server.getServerUrl() + this.productsUrl)
      .toPromise()
      .then(response => response.json().content as Product[])
      .catch(ProductService.handleError);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }

  deleteProduct(id: number): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(ProductService.handleError);
  }

  createProduct(name: string): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(ProductService.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(ProductService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
