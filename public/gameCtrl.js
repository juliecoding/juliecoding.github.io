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

  $scope.spinText = "Spin Me!"

  $scope.selectCountry = function(){
    $scope.spin = !$scope.spin;
    if (!$scope.spin) {
      gameService.getCountry().then(function(response){
        $scope.selectedCountry = response.data;
        console.log($scope.selectedCountry);
      })
      $scope.spinText = "Spin Me!"
    }
    else {
      $scope.spinText = "Stop!"
    }
  }

  // $scope.audio = $("#soundClip")[0];
  // $("#spinButton").on('click', function() {
  //   audio.play();
  // })

});
