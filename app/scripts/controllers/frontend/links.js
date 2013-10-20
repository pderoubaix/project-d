'use strict';


angular.module('nodedataApp')
    .controller('LinksCtrl', function ($scope, $http) {
        $scope.headers = ["name", "phone"];
        $http({method: 'jsonp', url: 'http://'+location.host+'/api/link?callback=JSON_CALLBACK'}).success(function(data, status, headers, config) {
            $scope.contacts = data;
        }).
        error(function(data, status, headers, config) {

            });
    });
