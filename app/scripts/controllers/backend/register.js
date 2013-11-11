'use strict';

angular.module('nodedataApp')
    .controller('RegisterCtrl', function ($scope,$http, $location) {
        $scope.user = {};
        $scope.createUser = function () {

            $http.post('/user/add', $scope.user).
                success(function(data) {
                    $location.path('/#/');
                });
        };
    });