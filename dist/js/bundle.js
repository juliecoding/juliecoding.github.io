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

angular.module("app").service("gameService", function($http) {

  var URL = 'https://restcountries.eu/rest/v1/alpha/'

  this.getCountry = function() {
    this.countryCodes =[
        "AFG",
        "ALA",
        "ALB",
        "DZA",
        "ASM",
        "AND",
        "AGO",
        "AIA",
        "ATG",
        "ARG",
        "ARM",
        "ABW",
        "AUS",
        "AUT",
        "AZE",
        "BHS",
        "BHR",
        "BGD",
        "BRB",
        "BLR",
        "BEL",
        "BLZ",
        "BEN",
        "BMU",
        "BTN",
        "BOL",
        "BIH",
        "BWA",
        "BRA",
        "VGB",
        "BRN",
        "BGR",
        "BFA",
        "BDI",
        "KHM",
        "CMR",
        "CAN",
        "CPV",
        "CYM",
        "CAF",
        "TCD",
        "CHL",
        "CHN",
        "HKG",
        "MAC",
        "COL",
        "COM",
        "COG",
        "COK",
        "CRI",
        "CIV",
        "HRV",
        "CUB",
        "CYP",
        "CZE",
        "PRK",
        "COD",
        "DNK",
        "DJI",
        "DMA",
        "DOM",
        "ECU",
        "EGY",
        "SLV",
        "GNQ",
        "ERI",
        "EST",
        "ETH",
        "FRO",
        "FLK",
        "FJI",
        "FIN",
        "FRA",
        "GUF",
        "PYF",
        "GAB",
        "GMB",
        "GEO",
        "DEU",
        "GHA",
        "GIB",
        "GRC",
        "GRL",
        "GRD",
        "GLP",
        "GUM",
        "GTM",
        "GGY",
        "GIN",
        "GNB",
        "GUY",
        "HTI",
        "VAT",
        "HND",
        "HUN",
        "ISL",
        "IND",
        "IDN",
        "IRN",
        "IRQ",
        "IRL",
        "IMN",
        "ISR",
        "ITA",
        "JAM",
        "JPN",
        "JEY",
        "JOR",
        "KAZ",
        "KEN",
        "KIR",
        "KWT",
        "KGZ",
        "LAO",
        "LVA",
        "LBN",
        "LSO",
        "LBR",
        "LBY",
        "LIE",
        "LTU",
        "LUX",
        "MDG",
        "MWI",
        "MYS",
        "MDV",
        "MLI",
        "MLT",
        "MHL",
        "MTQ",
        "MRT",
        "MUS",
        "MYT",
        "MEX",
        "FSM",
        "MDA",
        "MCO",
        "MNG",
        "MNE",
        "MSR",
        "MAR",
        "MOZ",
        "MMR",
        "NAM",
        "NRU",
        "NPL",
        "NLD",
        "ANT",
        "NCL",
        "NZL",
        "NIC",
        "NER",
        "NGA",
        "NIU",
        "NFK",
        "MNP",
        "NOR",
        "PSE",
        "OMN",
        "PAK",
        "PLW",
        "PAN",
        "PNG",
        "PRY",
        "PER",
        "PHL",
        "PCN",
        "POL",
        "PRT",
        "PRI",
        "QAT",
        "KOR",
        "REU",
        "ROU",
        "RUS",
        "RWA",
        "BLM",
        "SHN",
        "KNA",
        "LCA",
        "MAF",
        "SPM",
        "VCT",
        "WSM",
        "SMR",
        "STP",
        "SAU",
        "SEN",
        "SRB",
        "SYC",
        "SLE",
        "SGP",
        "SVK",
        "SVN",
        "SLB",
        "SOM",
        "ZAF",
        "ESP",
        "LKA",
        "SDN",
        "SUR",
        "SJM",
        "SWZ",
        "SWE",
        "CHE",
        "SYR",
        "TJK",
        "THA",
        "MKD",
        "TLS",
        "TGO",
        "TKL",
        "TON",
        "TTO",
        "TUN",
        "TUR",
        "TKM",
        "TCA",
        "TUV",
        "UGA",
        "UKR",
        "ARE",
        "GBR",
        "TZA",
        "USA",
        "VIR",
        "URY",
        "UZB",
        "VUT",
        "VEN",
        "VNM",
        "WLF",
        "ESH",
        "YEM",
        "ZMB",
        "ZWE"
      ];

    // this.generateRandomCountryCode = function() {
    //   var randomNum = Math.floor(Math.random() * this.countryCodes.length);
    //   this.randomCountryCode = this.countryCodes[randomNum];
    // };

    var randomNum = Math.floor(Math.random() * this.countryCodes.length);

    return $http({
      method: 'GET',
      url: URL + this.countryCodes[randomNum],
    })
  };

  this.getCountry();

});

angular.module("app").controller("homeCtrl", function($scope) {

});

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("infobarCtrl", function($scope, $http, gameService) {

  $scope.spinText = "Spin Me!"

  $scope.textChange = function() {

  }

});

angular.module("app").directive('infobarDir', function() {
  // return {
  //     restrict: 'A',
  //     link: function(scope, element, attribute) {
  //   }
  //   }
  //  };
});
//
// myModule.directive('my-directive', ['$animate', function($animate) {
//   return function(scope, element, attrs) {
//     element.on('click', function() {
//       if(element.hasClass('clicked')) {
//         $animate.removeClass(element, 'clicked');
//       } else {
//         $animate.addClass(element, 'clicked');
//       }
//     });
//   };
// }]);

//# sourceMappingURL=bundle.js.map
