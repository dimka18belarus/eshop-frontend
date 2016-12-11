/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {ServerSettingsService} from "./server-settings.service";

describe('Service: ServerSettings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerSettingsService]
    });
  });

  it('should ...', inject([ServerSettingsService], (service: ServerSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
