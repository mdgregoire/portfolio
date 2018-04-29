myApp.service('HomeService', ['$http', '$location', function($http, $location){
  console.log('in homeService');
  let self = this;

  self.submitText = function(text){
    console.log('in submit text', text);
  }

  self.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

  }]);
