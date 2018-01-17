import { AppPage } from './app.po';

describe('ng-training App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
