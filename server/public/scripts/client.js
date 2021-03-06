const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

console.log('js!');

/// Routes ///
myApp.config(['$routeProvider', function($routeProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as vm',
    })
    .when('/bio', {
      templateUrl: '/views/templates/bio.html',
      controller: 'HomeController as vm',
    })
    .when('/contact', {
      templateUrl: '/views/templates/contact.html',
      controller: 'HomeController as vm',
    })
    .when('/resume', {
      templateUrl: '/views/templates/resume.html',
      controller: 'HomeController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
//end config for myApp
