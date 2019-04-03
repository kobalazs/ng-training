import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/user/login');
  }

  getNavbarUserName() {
    return element(by.css('nav :nth-child(3) button')).getText();
  }

  async logIn() {
    element(by.xpath('/html/body/app-root/div/app-login/form/div[1]/input')).sendKeys('test@example.com');
    element(by.xpath('/html/body/app-root/div/app-login/form/div[2]/input')).sendKeys('secret');
    return await element(by.buttonText('Log In')).click();
  }
}
