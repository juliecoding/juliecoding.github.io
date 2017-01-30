angular.module("app").controller("gameCtrl", function($scope, $http, gameService) {

  var URL = 'https://restcountries.eu/rest/v1/alpha/'
  // $scope.getCountry = function() {
  //   return $http({
  //     method: 'GET',
  //     url: URL + "COL"
  //   }).then(function(response){
  //     console.log(response)
  //     $scope.selectedCountry = response;
  //     return $scope.selectedCountry;
  //   })
  // };

  $scope.spinGlobe = function() {
    console.log("spun")
  }

  $scope.selectCountry = function(){
    gameService.getCountry().then(function(response){
      $scope.selectedCountry = response.data;
      console.log($scope.selectedCountry);
    })
  }

  // $scope.audio = $("#soundClip")[0];
  // $("#spinButton").on('click', function() {
  //   audio.play();
  // })

});
