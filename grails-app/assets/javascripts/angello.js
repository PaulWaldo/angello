//= wrapped
//= require /angular/angular
//= require /angular-route/angular-route
//= require /angello/core/angello.core
//= require /angello/index/angello.index
//= require /angello/common/angello.common
//= require /angello/storyboard/angello.storyboard

var myModule = angular.module("Angello", [
    "angello.core",
    "angello.index",
    'ngRoute',
    'Angello.Common',
    'Angello.Storyboard'
]);

myModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/angello/storyboard/tmpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard'
        })
});
//var myModule = angular.module('Angello', []);
//myModule.factory('AngelloHelper', function() { });
//myModule.service('AngelloModel', function() { });
myModule.controller('MainCtrl', function() { });
//myModule.directive('story', function() { });
