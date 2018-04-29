myApp.controller('HomeController', ['HomeService', function(HomeService) {
  console.log('in HomeController');
  var self = this;
  self.homeService = HomeService;
  self.submitText = HomeService.submitText;
  self.openMenu = HomeService.openMenu;
}]);
