/**
 * Created by tammyrobinson on 4/10/17.
 *
 * This file will be used to test the
 * Api Service in the services.js file.
 */
describe('Test Case', function(){
    it('has a dummy spec to test 2 + 2', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(2 + 2).toEqual(4);
    });
});

describe('Api Service', function(){
   var ApiService;
   var data = [];
   // before each test load the uploadApp.services module
   beforeEach(angular.mock.module('uploadApp.services'));

   // before each test set the inject _ApiService_ service to the local ApiService variable
   beforeEach(inject(function (_ApiService_) {
        ApiService = _ApiService_;
   }));

   // test to verify the ApiService service exists
   it('should exist', function () {
        expect(ApiService).toBeDefined();
   });

   // set of tests for the ApiService.getItems() method
   describe('.getItems()', function () {
       // test to verify method getItems exist
       it('should exist', function () {
           expect(ApiService.getItems).toBeDefined();
       });

       // test to verify getItems() returns an array
       it('should return an array', function () {
           ApiService.getItems().then(function (items) {
              expect(items).toEqual(data);
           });
       });

   });

   // set of test for the ApiService.deleteItem() method
   describe('.deleteItem()', function () {
       // test to verify method deleteItem exist
       it('should exist', function () {
           expect(ApiService.deleteItem).toBeDefined();
       });
   });
});