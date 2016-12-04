import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "../../shared/product/product";

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Product[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as Product[]);
  }
}

