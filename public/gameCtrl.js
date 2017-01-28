angular.module("app").controller("gameCtrl", function($scope, gameService) {

  // $scope.getCountry = gameService.getCountry;
  //
  // $scope.selectedCountry = $scope.getCountry();
  //
  // gameService.getCountry().then(function(response){
  //   $scope.country = response.data.name;
  // })

  // $scope.spinGlobe = function() {
  //   //ANIMATES THE SPINNING GLOBE & PLAYS SOUND :P
  // }

  // $scope.audio = $("#soundClip")[0];
  // $("#spinButton").on('click', function() {
  //   audio.play();
  // })

});


//1. Put spin button on directive
//2. Call service from directive controller
//3. In the "then", set the data on the directive scope
