(function () {
  'use strict';

  angular
    .module('ui')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $uibModal, MainService) {
    var mainCtrl = this;

    mainCtrl.addDataModal = function addDataModal() {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/main/addData.html',
        controller: function ($scope) {
          $scope.data = {};
          $scope.save = function save() {
            modalInstance.close($scope.data);
          };

          $scope.cancel = function cancel() {
            modalInstance.close();
          };
        },
        resolve: {
          items: function () {
            return $scope.data;
          }
        }
      });

      modalInstance.result.then(function (item) {
        //console.log("FOUND:", $scope.data, items);
        if (item && item != null) {
          MainService.addData(item).then(function (resp) {
            console.log("Success:", resp);
          }, function (err) {
            console.log("err:", err);
          });
        }
      }, function () {

      });
    };


    mainCtrl.getData = function getData() {
      MainService.getData().then(function (resp) {
        console.log("Success:", resp);
      }, function (err) {
        console.log("err:", err);
      });
    };

  }
})();
