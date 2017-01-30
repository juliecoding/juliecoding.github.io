angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './public/homeView.html'
    })
    .state('game', {
      url: '/game',
      templateUrl: './public/gameView.html',
      controller: "gameCtrl"
    })
    .state('about', {
      url: '/about',
      templateUrl: './public/aboutView.html'
    })

  $urlRouterProvider
    .otherwise('/game');
});

// Create a new repo called 
// juliecoding.github.io
//
// Push to that to "host" the site.
