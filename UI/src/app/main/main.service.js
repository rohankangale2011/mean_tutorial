(function(){
    'use strict';
    
    angular.module('ui').factory('MainService',['$http','MainConstant',  MainService]);
    
    function MainService($http, MainConstant) {
        function addData(userData){
            var request = $http({
                method: 'POST',
                url: MainConstant.MAIN_URL + '/add',
                data: userData
            });
            return request.then(function (response) {
                return response;
            });
        }

        function getData(){
            var request = $http({
                method: 'GET',
                url: MainConstant.MAIN_URL + '/get'
            });
            return request.then(function (response) {
                return response;
            });
        }
        
        return {
            addData: addData,
            getData: getData
        } 
    }    
})();