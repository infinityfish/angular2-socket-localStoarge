import { ZiziPage } from './app.po';

describe('zizi App', function() {
  let page: ZiziPage;

  beforeEach(() => {
    page = new ZiziPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('zizi works!');
  });
});
