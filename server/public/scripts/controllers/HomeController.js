myApp.controller('HomeController', ['HomeService', function(HomeService) {
  console.log('in HomeController');
  var self = this;
  self.homeService = HomeService;

}]);
