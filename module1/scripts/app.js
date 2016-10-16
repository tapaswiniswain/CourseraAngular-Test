(function(){
'use strict';
  angular.module('LunchCheck',[])
  .controller('lunchCheckController', lunchCheckController);
  lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope){
  $scope.showMessage = function () {
    if($scope.items !== "" && $scope.items !==undefined)
    {
      checkMsglength($scope.items);
    }
    else{
       $scope.message="Please enter data first";
    }
  }


  function checkMsglength(items) {
    var count = 0;
    var numberOfItems=items.split(',');
    numberOfItems.forEach(function(str) {
      var strNoSPace = str.replace(/^\s+|\s+$/g, '');
      if (strNoSPace !== "") {
        count++;
      }
    });

    if(count <= 3) {
        $scope.message="Enjoy";
      } else {
          $scope.message="Too much!";
      }

  }
}
})();
