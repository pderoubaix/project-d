'use strict';

angular.module('nodedataApp', ['capitaliseFilters'])
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
      .when('/admin', {
            templateUrl: 'views/backend/admin.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
