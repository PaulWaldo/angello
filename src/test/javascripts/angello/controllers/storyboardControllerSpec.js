describe("Angello module", function() {
    var scope;

    beforeEach(angular.mock.module("Angello", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("StoryboardController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("StoryboardController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
