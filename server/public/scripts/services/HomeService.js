myApp.service('HomeService', ['$http', '$location', function($http, $location){
  console.log('in homeService');
  let self = this;

  self.submitText = function(text){
    console.log('in submit text', text);
  }

  }]);
