//= wrapped
//= require /angular/angular
//= require /angular-route/angular-route
//= require /angello/core/angello.core
//= require /angello/index/angello.index
//= require /angello/common/angello.common
//= require_self
//= require /angello/controllers/mainController
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree /angello/domain
//= require_tree templates
//= require /angello/storyboard/angello.storyboard

var myModule = angular.module("angello", [
    "angello.core",
    "angello.index",
    'ngRoute',
    'angello.Common',
    'angello.Storyboard',
//    'angello.login'
]);

myModule.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/angello/storyboard/tmpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard'
        })
        .when('/login', {
            templateUrl: 'src/angello/login/tmpl/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .otherwise({redirectTo: '/'});

    // Loading interceptor
    $httpProvider.interceptors.push('loadingInterceptor');
 });

myModule.factory('loadingInterceptor', function (LoadingService) {
    var loadingInterceptor = {
        request: function (config) {
            LoadingService.setLoading(true);
            return config;
        },
        response: function (response) {
            LoadingService.setLoading(false);
            return response;
        }
    };
    return loadingInterceptor;
});
//myModule.factory('AngelloHelper', function() { });
//myModule.service('AngelloModel', function() { });
//myModule.controller('MainCtrl', function() { });
//myModule.directive('story', function() { });

myModule.value('STORY_TYPES', [
    {name: 'Feature'},
    {name: 'Enhancement'},
    {name: 'Bug'},
    {name: 'Spike'}
]);
