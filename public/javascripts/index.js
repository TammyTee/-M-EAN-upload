/**
 * Created by tammyrobinson on 3/19/17.
 */

(function(){
    'use strict';

    var app = angular.module('uploadApp', ['uploadApp.controllers', 'ngRoute', 'angularFileUpload']);
    
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/main.html',
                controller  : 'MainController',
                controllerAs: 'main'
            })
    });
})();



