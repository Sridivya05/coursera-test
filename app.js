
'use strict';
(function () {

angular.module('Lunchchecker', [])
.controller('LunchCheckerController', LunchCheckerController)


LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController ($scope) {
  $scope.items = '';
  $scope.msg = 'Please enter the data first';

  $scope.checkText = function() {
    if ($scope.items.length == 0) {
      $scope.msg = 'Please enter the data first';
      return;
    } 
    else {
      let listItems = $scope.items.split(',').filter(value => value.trim().length!=0);
      if (listItems.length <= 3) {
        $scope.msg = 'Enjoy your lunch!';
      }
      else {
        $scope.msg = 'Too much!';
      }      
    }
  }
}

})();
