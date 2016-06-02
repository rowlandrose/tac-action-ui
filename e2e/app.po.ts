export class TacActionUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tac-action-ui-app h1')).getText();
  }
}
