/**
 * Created by tammyrobinson on 3/19/17.
 *
 * This controller is responsible for reflecting
 * changes to the $scope of the list of items
 */
'use strict';
var app = angular.module('uploadApp.controllers');

app.controller('TableController', TableController);
TableController.$inject = ['$scope', 'ApiService'];

function TableController($scope, ApiService) {
    var vm   = this;

    vm.deleteItem = function(item, idx){
        ApiService.deleteItem(item, idx).then(function (data) {});
    }
}