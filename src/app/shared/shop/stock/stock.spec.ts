/* tslint:disable:no-unused-variable */
import {addProviders} from "@angular/core/testing";
import {Stock} from "./stock";

describe('Stock', () => {
  it('should createProduct an instance', () => {
    expect(new Stock()).toBeTruthy();
  });
});
