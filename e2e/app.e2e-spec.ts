import { TomsProductStorePage } from './app.po';

describe('toms-product-store App', function() {
  let page: TomsProductStorePage;

  beforeEach(() => {
    page = new TomsProductStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
