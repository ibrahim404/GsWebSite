import { GsWebSitePage } from './app.po';

describe('gs-web-site App', () => {
  let page: GsWebSitePage;

  beforeEach(() => {
    page = new GsWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
