'use strict';

angular.module('nodedataApp')
    .controller('LinksCtrl', function ($scope) {
        $scope.master= {};

        $scope.update = function(user) {
            $scope.master= angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    });
