//= wrapped

angular
    .module("angello")
    .controller("MainController", MainController)
    .factory('authInterceptor', function() {return AuthInterceptor;})
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

function MainController($http, $window, $scope) {
    var main = this;
    main.currentUser = null;

    $scope.$on('onCurrentUserId', function (ctx, id) {
        main.currentUser = LoginService.getCurrentUser();
    });

    main.logout = function() {
        LoginService.logout();
        main.currentUser = null;
    };





    var vm = this;

    vm.authenticated = false;
    vm.user = {};

    vm.login = function () {
        $http.post('/api/login', {
            username: vm.user.username,
            password: vm.user.password
        }).then(function (response) {
            vm.authenticated = true;
            $window.sessionStorage.token = response.data.access_token;
        });
    };
}

function AuthInterceptor($window) {
    var vm = this;
    vm.request = function(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
    };
}