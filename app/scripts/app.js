'use strict';

angular.module('nodedataApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/hello',{
            templateUrl: 'views/hello.html',
            controller: 'HelloCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
