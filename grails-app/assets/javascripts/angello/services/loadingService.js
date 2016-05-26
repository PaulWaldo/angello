
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
