import { TacActionUiPage } from './app.po';

describe('tac-action-ui App', function() {
  let page: TacActionUiPage;

  beforeEach(() => {
    page = new TacActionUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tac-action-ui works!');
  });
});
