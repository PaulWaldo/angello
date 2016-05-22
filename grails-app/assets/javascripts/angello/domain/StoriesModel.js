//= wrapped

angular
    .module("angello")
    .factory("StoriesModel", StoriesModel);

function StoriesModel(DomainServiceFactory) {
    return DomainServiceFactory("storiesModel/:id", {"id": "@id"});
}
