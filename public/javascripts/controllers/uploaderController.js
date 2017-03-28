/**
 * Created by tammyrobinson on 3/19/17.
 *
 * This controller is responsible for moving the uploaded
 * file to the backend for storage; in this case temporary
 * file system storage
 */
var app = angular.module('uploadApp.controllers');

app.controller('UploaderController', UploaderController);
UploaderController.$inject = ['$scope', '$http', 'FileUploader'];

function UploaderController($scope, $http, FileUploader) {
    var vm   = this,
        main = $scope.main;

    vm.uploader      = new FileUploader({
        url: 'http://localhost:3000/api/upload',
        removeAfterUpload: false,
        queueLimit: 5
    });


    vm.uploader.onCompleteAll = function () {
        $http({
            method: 'GET',
            url:    'http://localhost:3000/api/upload'
        }).then(function success(res) {
            main.items = res.data;
        }, function error(res) {
            console.error('Error retrieving JSON: ', res.data);
        });
    }
}