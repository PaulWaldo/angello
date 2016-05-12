//= wrapped

angular
    .module("Angello")
    .factory("StoriesModel", StoriesModel);

function StoriesModel(DomainServiceFactory) {
    return DomainServiceFactory("storiesModel/:id", {"id": "@id"});
}
