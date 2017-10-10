import { ExangularPage } from './app.po';

describe('exangular App', () => {
  let page: ExangularPage;

  beforeEach(() => {
    page = new ExangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
