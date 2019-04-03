import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('NgTraining App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brand text', () => {
    page.navigateTo();
    expect(page.getBrandText()).toEqual('NgTraining');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
