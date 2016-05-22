
angular
    .module("angello.Common")
    .factory('LoadingService',
            function ($rootScope) {
                var setLoading = function (loading) {
                    $rootScope.loadingView = loading;
            };

            return {
                setLoading: setLoading
            }
        });

//    .factory("LoadingService", loadingService);
//
//function loadingService($rootScope) {
//    return function() {
//        var setLoading = function(loading) {
//            $rootScope.loadingView = loading;
//        };
//        return {setLoading: setLoading};
//    };
//}