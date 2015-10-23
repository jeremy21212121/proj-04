var app = angular.module('vote', []);

angular.module('vote', [])
  .controller('FormController', ['$scope', function($scope) {
    $scope.userType = 'guest';


  }]);

$('input:submit').click(function( event ) {
  event.preventDefault();
});

//   angular.module('sendRegistration', [])
// .controller('FormController', function($scope) {
//     $scope.sendRegistration = function($event){
//       // we have access to the event object, should we need it!
//       $event.preventDefault();
//     }
// });
