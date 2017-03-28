/**
 * Created by tammyrobinson on 3/19/17.
 */
var app = angular.module('uploadApp.controllers');

app.controller('TableController', TableController);
TableController.$inject = ['$scope', '$http'];

function TableController($scope, $http) {
    var vm   = this,
        main = $scope.main;

}