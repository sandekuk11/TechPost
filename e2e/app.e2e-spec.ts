import { TechPostPage } from './app.po';

describe('tech-post App', function() {
  let page: TechPostPage;

  beforeEach(() => {
    page = new TechPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
