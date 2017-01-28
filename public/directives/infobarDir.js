angular.module("app").directive('infobarDir', function() {
  return {
    restrict: 'E',
    templateUrl: 'public/directives/infobarView.html',
    controller: "infobarCtrl"
    //link:
  };
});
