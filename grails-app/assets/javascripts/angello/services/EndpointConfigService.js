angular.module('angello.Common')
    .service('EndpointConfigService', function() {
        var service = this;
        var currentEndpoint = { URI: 'http://localhost:9090/', root: 'api/', format: '.json'};

        service.getUrl = function(model) {
            return currentEndpoint.URI + currentEndpoint.root + model;
        };

        service.getUrlForId = function(model, id) {
            return service.getUrl(model) + id + currentEndpoint.format;
        };

        service.getCurrentFormat = function() {
            return currentEndpoint.format;
        };

        service.getCurrentURI = function() {
            return currentEndpoint.URI;
        };
    });
