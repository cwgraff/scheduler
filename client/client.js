var app = angular.module('schedApp', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl:'views/login.html',
            controller: 'LoginController'
        })
        .when('/selection', {
            templateUrl:'views/selection.html',
            controller: 'SelectionController'
        })
        .when('/result', {
            templateUrl:'views/result.html',
            controller: 'ResultController'
        });

    $locationProvider.html5Mode(true);

}]);





