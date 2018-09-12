(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);
LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {

  $scope.menu = "";
  $scope.messageContent = "";

  $scope.showMessage = function () {
    if ($scope.menu ==""){return $scope.messageContent = "Please enter data first"};
    var elements = $scope.menu.split(',').length;
    if (elements <= 3){return $scope.messageContent = "Enjoy!"};
    if (elements > 3){return $scope.messageContent = "Too much!"};
  };


}

})();
