//= wrapped

angular
    .module("Angello")
    .factory("Story", Story);

function Story(DomainServiceFactory) {
    return DomainServiceFactory("api/stories/:id", {"id": "@id"});
}
