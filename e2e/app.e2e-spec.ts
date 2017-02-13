import { RhmamPage } from './app.po';

describe('rhmam App', function() {
  let page: RhmamPage;

  beforeEach(() => {
    page = new RhmamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
