import { BuildstuffNg2WorkshopPage } from './app.po';

describe('buildstuff-ng2-workshop App', function() {
  let page: BuildstuffNg2WorkshopPage;

  beforeEach(() => {
    page = new BuildstuffNg2WorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
