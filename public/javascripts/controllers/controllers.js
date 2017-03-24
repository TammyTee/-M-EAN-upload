/**
 * Created by tammyrobinson on 3/19/17.
 */
var app = angular.module('uploadApp.controllers', []);

app.controller('MainController', MainController);
MainController.$inject = ['$scope'];

function MainController($scope) {
    var vm = this;

    vm.name = 'Tammy';
}
