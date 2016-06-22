export class ZiziPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('zizi-app h1')).getText();
  }
}
