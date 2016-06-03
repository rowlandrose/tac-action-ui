"use strict";
var testing_1 = require('@angular/core/testing');
var tac_action_ui_component_1 = require('../app/tac-action-ui.component');
testing_1.beforeEachProviders(function () { return [tac_action_ui_component_1.TacActionUiAppComponent]; });
testing_1.describe('App: TacActionUi', function () {
    testing_1.it('should create the app', testing_1.inject([tac_action_ui_component_1.TacActionUiAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'tac-action-ui works!\'', testing_1.inject([tac_action_ui_component_1.TacActionUiAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('tac-action-ui works!');
    }));
});
//# sourceMappingURL=tac-action-ui.component.spec.js.map