import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/base.service";
import {ServerSettingsService} from "../../shared/server-settings/server-settings.service";
import {Http} from "@angular/http";
import {Category} from "../category";

@Injectable()
export class CategoryService extends BaseService {

  private categoryUrl = '/api/categories';  // URL to web api

  constructor(protected http: Http, protected server: ServerSettingsService) {
    super(http, server);
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.server.getServerUrl() + this.categoryUrl)
      .toPromise()
      .then(response => response.json().content as Category[])
      .catch(BaseService.handleError);
  }

  getCategory(id: number): Promise<Category> {
    return this.getCategories()
      .then(categories => categories.find(category => category.id === id));
  }

  deleteCategory(id: number): Promise<void> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(BaseService.handleError);
  }

  createCategory(name: string): Promise<Category> {
    return this.http
      .post(this.categoryUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(BaseService.handleError);
  }

  updateCategory(category: Category): Promise<Category> {
    const url = `${this.categoryUrl}/${category.id}`;
    return this.http
      .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
      .then(() => category)
      .catch(BaseService.handleError);
  }
}
