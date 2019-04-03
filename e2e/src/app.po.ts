import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getBrandText() {
    return element(by.css('a.navbar-brand')).getText() as Promise<string>;
  }
}
