var routerApp = angular.module('routerApp', ['ui.router']);

routerApp
.config(['$stateProvider',
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

}]);
// .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//
//
//   $locationProvider.html5Mode({
//     enabled: true,
//     requiredBase: false,
//     rewriteLinks: false
//     });
//
//     $urlRouterProvider.otherwise('/404');
//
//     $stateProvider
//
//
//         .state('welcome', {
//             url: '',
//             templateUrl: 'index1.html'
//         })
//
//
//         .state('checkin', {
//           url: '/check-in',
//           templateUrl: 'index2.html'
//         });
//
// });
