import { TwallFrontPage } from './app.po';

describe('twall-front App', () => {
  let page: TwallFrontPage;

  beforeEach(() => {
    page = new TwallFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
