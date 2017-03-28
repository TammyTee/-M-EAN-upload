/**
 * Created by tammyrobinson on 3/19/17.
 */
var app = angular.module('uploadApp.controllers', []);

app.controller('MainController', MainController);
MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    var vm = this;

    vm.name = 'Tammy';
    vm.items= [];

    $http({
        method: 'GET',
        url:    'http://localhost:3000/api/upload'
    }).then(function success(res){
        console.log(res);
        vm.items = res.data;
    }, function error(res){
        console.error('Error retrieving JSON: ', res.data);
    });
}
