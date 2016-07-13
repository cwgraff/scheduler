var app = angular.module('schedApp', []);


//app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
//    $routeProvider
//        .when('/', {
//            templateUrl:'views/login.html',
//            controller: 'LoginController'
//        })
//        .when('/selection', {
//            templateUrl:'views/selection.html',
//            controller: 'SelectionController'
//        })
//        .when('/result', {
//            templateUrl:'views/result.html',
//            controller: 'ResultController'
//        });
//
//    $locationProvider.html5Mode(true);
//
//}]);

app.controller('mainController', ['$scope', '$http', function($scope, $http){

    $http.get('/database/existingDates').then(function(response){
       console.log("Heard back from server:" + response.data);
        $scope.dateList = response.data;
    });
//change start and stop slot times here for date creation times
var FIRST_SLOT = 730;
var LAST_SLOT = 1700;
    $scope.greeting="hello there";

    console.log("hello");

    console.log(FIRST_SLOT);

for (var i = FIRST_SLOT; i <= LAST_SLOT; i += 15) {

    console.log(i + " hello");

}
}]);





