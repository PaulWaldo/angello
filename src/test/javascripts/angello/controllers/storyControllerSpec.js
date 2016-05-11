describe("angello module", function() {
    var scope;

    beforeEach(angular.mock.module("angello", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("StoryController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("StoryController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
