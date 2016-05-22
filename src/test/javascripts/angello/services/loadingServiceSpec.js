describe("angello module", function() {

    beforeEach(angular.mock.module("angello", function() {
    }));

    describe("loadingService", function() {

        var loadingService;

        beforeEach(angular.mock.inject(function(_loadingService_) {
            loadingService = _loadingService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
