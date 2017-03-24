/**
 * Created by tammyrobinson on 3/19/17.
 *
 * This controller is responsible for moving the uploaded
 * file to the backend for storage; in this case temporary
 * file system storage
 */
var app = angular.module('uploadApp.controllers');

app.controller('UploaderController', UploaderController);
UploaderController.$inject = ['$scope', 'FileUploader'];

function UploaderController($scope, FileUploader) {
    var vm   = this,
        main = $scope.main;

    vm.uploader      = new FileUploader({
        url: 'http://localhost:3000/api/upload',
        removeAfterUpload: false,
        queueLimit: 5
    });
    main.progressamt = vm.uploader.progress;
}