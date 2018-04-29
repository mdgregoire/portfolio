myApp.service('HomeService', ['$http', '$location', function($http, $location){
  console.log('in homeService');
  let self = this;

  self.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

  }]);
