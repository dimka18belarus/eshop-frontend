import {Injectable} from "@angular/core";

@Injectable()
export class ServerSettingsService {

  getServerUrl() {
    return "http://localhost:9095";
  }

}
