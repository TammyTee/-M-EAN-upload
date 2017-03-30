/**
 * Created by tammyrobinson on 3/30/17.
 *
 * This service is responsible for making calls to the
 * uploads API and returning the 'items' singleton which
 * is the list of uploaded items by the user.
 */
'use strict';

var app = angular.module('uploadApp.services', []);

app.service('ApiService', ApiService);
ApiService.$inject = ['$http'];

function ApiService($http) {
    var apiService = this, items = [];

    var addRowNum = function(arr){
        for(var i = 0; i < arr.length; i++)
            arr[i].rownum = i + 1;
    };

    apiService.getItems = function(){
        return $http({
                    method: 'GET',
                    url   : '/api/upload'
                }).then(function success(res){
                    items = res.data;
                    addRowNum(items);
                    return items;
                }, function error(res){
                    console.error('Error retrieving JSON: ', res.data);
                });
    };

    apiService.deleteItem = function (item, idx) {
        var id = item.id;

        // remove item from array and API data file
        return  $http({
                    method: 'DELETE',
                    url:    '/api/upload/' + id,
                    data:    item,
                    headers: { "Content-Type": "application/json;charset=utf-8" }
                }).then(function success(res){
                    items.splice(idx, 1);
                    addRowNum(items);
                }, function error(res) {
                    console.error('There was an error deleting the item: ', res.data);
                })

    };

    return {
        getItems  : apiService.getItems,
        deleteItem: apiService.deleteItem
    }
}