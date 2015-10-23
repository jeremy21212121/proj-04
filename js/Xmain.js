
(function() {
  var app = angular.module('mars', ['ui.router']);


  app.config(['$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            function($stateProvider,
              $urlRouterProvider,
              $locationProvider){

          $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false,
            rewriteLinks: false
          });

            $urlRouterProvider.otherwise('/');
            
          $stateProvider
            .state('welcome', {
                url: '/',
                // controller: "FormController",
                templateUrl: 'index1.html'
            })
            .state('checkin', {
                url: '/check-in',
                templateUrl: 'index2.html'
            })
            .state('encounters', {
                url: '/recent-encounters',
                templateUrl: 'index3.html'
            })
            .state('report', {
                url: '/report-encounter',
                templateUrl: 'index4.html'
            })



  }])

  angular.module('mars', [])
    .controller('FormController', ['$scope', '$state', function($scope) {
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



})();
