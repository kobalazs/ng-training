import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }

  async logIn() {
    return await element(by.buttonText('Log In')).click();
  }
}
