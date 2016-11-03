import { S2iIacWebPage } from './app.po';

describe('s2i-iac-web App', function() {
  let page: S2iIacWebPage;

  beforeEach(() => {
    page = new S2iIacWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
