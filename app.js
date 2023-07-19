angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function($scope) {
    $scope.checkLunchItems = function() {
      if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first.';
      } else {
        var items = $scope.lunchItems.split(',');
        items = items.filter(function(item) {
          return item.trim() !== '';
        });

        if (items.length === 0) {
          $scope.message = 'Please enter data first.';
        } else if (items.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  }]);
