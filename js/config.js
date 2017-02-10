app.config(function($routeProvider){
    $routeProvider
    .when('/',{
         templateUrl: "../views/logIn.html",
        controller: "logInCtrl",
        controllerAs: "log"
    })
    .when('/home',{
       templateUrl: "../views/home.html",
        controller: "homeCtrl",
        controllerAs: "home"
    })
    .when('/reg',{
        templateUrl: "../views/registration.html",
        controller: "regCtrl",
        controllerAs: "reg"
    })
    .otherwise({
        redirectTo: '/'
    })
})