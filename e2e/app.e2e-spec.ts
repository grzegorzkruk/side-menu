import { SideMenuPage } from './app.po';

describe('side-menu App', () => {
  let page: SideMenuPage;

  beforeEach(() => {
    page = new SideMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
