import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {ServerSettingsService} from "./server-settings/server-settings.service";

@Injectable()
export class BaseService {

  protected headers = new Headers({'Content-Type': 'application/json'});

  constructor(protected http: Http, protected server: ServerSettingsService) {
  }

  protected static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
