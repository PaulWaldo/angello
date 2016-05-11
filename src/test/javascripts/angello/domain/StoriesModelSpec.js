describe("angello module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("angello", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("StoriesModel domain", function() {

        var StoriesModel;

        beforeEach(angular.mock.inject(function(_StoriesModel_) {
            StoriesModel = _StoriesModel_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
