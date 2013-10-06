'use strict';

angular.module('nodedataApp', ['capitaliseFilters'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/links',{
            templateUrl: 'views/links.html',
            controller: 'LinksCtrl'
        })
      .when('/tags', {
        templateUrl: 'views/tags.html',
        controller: 'TagsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
