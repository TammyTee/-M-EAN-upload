/**
 * Created by tammyrobinson on 3/19/17.
 *
 * This controller is responsible for the main app
 * behaviors including moving the uploaded file to
 * the backend for storage; in this case temporary
 * file system storage
 */
'use strict';
var app = angular.module('uploadApp.controllers', []);

app.controller('MainController', MainController);
MainController.$inject = ['ApiService', 'FileUploader'];

function MainController(ApiService, FileUploader) {
    var vm = this;

    vm.uploader = new FileUploader({
        url: 'http://localhost:3000/api/upload',
        removeAfterUpload: false,
        queueLimit: 3
    });

    vm.getItems = function(){

        ApiService.getItems().then(function (data) {
            vm.items = data;
        });
    };

    vm.uploader.onCompleteAll = function () {
        vm.getItems();
    };

    vm.getItems();
}
