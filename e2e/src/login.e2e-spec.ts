import { LoginPage } from './login.po';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should log in', async () => {
    await page.navigateTo();
    page.logIn();
    expect(page.getNavbarUserName()).toEqual('Test User');
  });
});
