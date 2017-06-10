import { Angular2FirebaseAuthenticationPage } from './app.po';

describe('angular2-firebase-authentication App', () => {
  let page: Angular2FirebaseAuthenticationPage;

  beforeEach(() => {
    page = new Angular2FirebaseAuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
