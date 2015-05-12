var myApp = angular.module('myApp', [
    , 'ngRoute'
  , 'myControllers'
]);



myApp.config(function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/ng/views/home.html',
        controller: 'HomeControler'
    }).
      when('/login', {
        templateUrl: '/ng/views/login.html',
        controller: 'ContactControler'
    }).
      when('/dashboard', {
        templateUrl: '/ng/views/dashboard.html',
        controller: 'ContactControler'
    }).
      when('/fbauth', {
        templateUrl: '/ng/views/home.html',
        controller: 'ContactControler'
    }).
      when('/about', {
        templateUrl: '/ng/views/contactme.html',
        controller: 'ContactControler'
    }).
      otherwise({
        redirectTo: '/'
    });
});