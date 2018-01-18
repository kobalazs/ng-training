import { LoginPage } from './login.po';

describe('ng-training App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should log in works', async() => {
    await page.navigateTo();
    page.logIn();
    expect(page.getNavbarUserName()).toEqual('Test User');
  });
});
