"use strict";

var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        // route for the home page

        .when('/', {
            templateUrl: '../pages/home.html',
            controller: 'mainController'
        });

    $locationProvider.html5Mode(true);
});

app.controller('mainController', function ($scope , $http) {
      $http.get("https://api.github.com/users/rkpattnaik780").then(function(res){
            console.log(res.data);
      });
});