// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("infobarCtrl", function($scope, gameService) {

  $scope.getCountry = gameService.getCountry();
  $scope.selectedCountry = getCountry();

  // gameService.getCountry().then(function(response){
  //   $scope.country = response.data
  // })


});
