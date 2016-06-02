import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TacActionUiAppComponent } from '../app/tac-action-ui.component';

beforeEachProviders(() => [TacActionUiAppComponent]);

describe('App: TacActionUi', () => {
  it('should create the app',
      inject([TacActionUiAppComponent], (app: TacActionUiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tac-action-ui works!\'',
      inject([TacActionUiAppComponent], (app: TacActionUiAppComponent) => {
    expect(app.title).toEqual('tac-action-ui works!');
  }));
});
