'use strict';

angular.module('nodedataApp', ['capitaliseFilters','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontend/main.html',
        controller: 'MainCtrl'
      })
        .when('/links',{
            templateUrl: 'views/frontend/links.html',
            controller: 'LinksCtrl'
        })
      .when('/tags', {
        templateUrl: 'views/frontend/tags.html',
        controller: 'TagsCtrl'
      })
      .when('/register', {
            templateUrl: 'views/backend/register.html',
            controller: 'RegisterCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
