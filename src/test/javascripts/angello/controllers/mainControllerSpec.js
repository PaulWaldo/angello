describe("angello module", function() {
    var scope;

    beforeEach(angular.mock.module("angello", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("MainController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("MainController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
