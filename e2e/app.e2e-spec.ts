import { EshopClientPage } from './app.po';

describe('eshop-client App', function() {
  let page: EshopClientPage;

  beforeEach(() => {
    page = new EshopClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
