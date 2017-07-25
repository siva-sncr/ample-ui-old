import { AmplePage } from './app.po';

describe('ample App', () => {
  let page: AmplePage;

  beforeEach(() => {
    page = new AmplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
