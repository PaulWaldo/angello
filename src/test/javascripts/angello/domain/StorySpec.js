describe("Angello module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("Angello", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Story domain", function() {

        var Story;

        beforeEach(angular.mock.inject(function(_Story_) {
            Story = _Story_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
