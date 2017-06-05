import { TheJobsPage } from './app.po';

describe('the-jobs App', () => {
  let page: TheJobsPage;

  beforeEach(() => {
    page = new TheJobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
