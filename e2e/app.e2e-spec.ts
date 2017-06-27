import { AngularJeopardyPage } from './app.po';

describe('angular-jeopardy App', () => {
  let page: AngularJeopardyPage;

  beforeEach(() => {
    page = new AngularJeopardyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
