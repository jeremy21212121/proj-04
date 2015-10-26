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
                templateUrl: 'index2.html',
                controller: 'WhoController'
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


// _________                __                .__  .__
// \_   ___ \  ____   _____/  |________  ____ |  | |  |   ___________  ______
// /    \  \/ /  _ \ /    \   __\_  __ \/  _ \|  | |  | _/ __ \_  __ \/  ___/
// \     \___(  <_> )   |  \  |  |  | \(  <_> )  |_|  |_\  ___/|  | \/\___ \
//  \______  /\____/|___|  /__|  |__|   \____/|____/____/\___  >__|  /____  >
//         \/            \/                                  \/           \/


routerApp.controller('WhoController', ['$scope','$state','$http', function($scope,$state,$http){
//   var API_URL_GET_JOBS = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
//   var API_URL_CREATE_COLONIST = "https://red-wdp-api.herokuapp.com/api/mars/colonists";
//
  $scope.colonist = {};
  $scope.data = {
      occupations : [{name:'Janitor'},
                     {name:'Alien Hunter'},
                     {name:'Dust Farmer'},
                     {name:'Battery Technician'},
                     {name: 'Yoga Teacher'}],
    };
//
// $http.get(API_URL_GET_JOBS).then(function(response){
//
//       $scope.jobs = response.data.jobs;
//
// });



  $scope.invalidName = false;
  $scope.invalidAge = false;
  $scope.invalidOccupation = false;

  $scope.submitForm = function(event){
    event.preventDefault();
//
// if ($scope.checkinForm.$invalid){
//     $scope.showValidation = true;
// } else {
//   $http({
//     method: 'POST',
//     url: API_URL_CREATE_COLONIST,
//     data: {colonist: $scope.colonist}
//   }).then(function(response){
//     $state.go('encounters');
//   })
// }
//

//
    $scope.invalidName = true;
    $scope.invalidAge = true;
    $scope.invalidOccupation = true;

    //Setting $valid property for the forms fields, the property is used to add a class (see markup)


    if ($scope.whoForm.name.$valid){$scope.invalidName=false;}
    if ($scope.whoForm.age.$valid){$scope.invalidAge=false;}
    if ($scope.whoForm.occupation.$dirty){$scope.invalidOccupation=false;}



    if ($scope.invalidName==false &&
        $scope.invalidAge==false
        && $scope.invalidOccupation==false
      )
     {
     $state.go('encounters');
}
    //Navigate if all is well in the land
  //   if ($scope.whoForm.name.$valid && $scope.whoForm.age.$valid && $scope.whoForm.occupation.$valid){
  //     $state.go('encounters');
  //   }
  //
  //
}

}]);


// function WhoController($scope,$state,$http){
//   $scope.name.invalidValue,
//   $scope.age.invalidValue,
//   $scope.occupation.invalidValue = false;
//
//   $scope.submitForm = function(event){
//     event.preventDefault();
//     $scope.name.invalidValue,
//     $scope.age.invalidValue,
//     $scope.occupation.invalidValue = true;
//
//     //Setting $valid property for the forms fields, the property is used to add a class (see markup)
//     if ($scope.whoForm.name.$valid){$scope.name.invalidValue=false;}
//     if ($scope.whoForm.age.$valid){$scope.age.invalidValue=false;}
//     if ($scope.whoForm.occupation.$valid){$scope.occupation.invalidValue=false;}
//
//     //Navigate if all is well in the land
//     if ($scope.whoForm.name.$valid && $scope.whoForm.age.$valid && $scope.whoForm.occupation.$valid){
//       $state.go('encounters');
//     }
//
//   }
// };
