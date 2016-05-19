import { ValoplusPage } from './app.po';

describe('valoplus App', function() {
  let page: ValoplusPage;

  beforeEach(() => {
    page = new ValoplusPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('valoplus works!');
  });
});
