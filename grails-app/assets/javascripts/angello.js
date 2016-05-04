//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angello/core/angello.core
//= require /angello/index/angello.index
//= require /angello/storyboard/Storyboard

var myModule = angular.module("Angello", [
    "angello.core",
    "angello.index",
    'ngRoute',
    "Angello.Storyboard"
]);

myModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/angello/storyboard/tmpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard'
        })
});