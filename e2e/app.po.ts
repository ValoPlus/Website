export class ValoplusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('valoplus-app h1')).getText();
  }
}
