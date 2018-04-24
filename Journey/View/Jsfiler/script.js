var app = angular.module("app", ['ngRoute']);


angular.module("app").config(

    function ($routeProvider) {
        $routeProvider
            .when("/", {                
                templateUrl: "/View/html/HomePage.html",
                controller: 'HomePageController'
            }).when("/NewTravel", {
                templateUrl: "/View/html/Newtravel.html",
                controller: 'travelController'                

            }).when("/NewUser", {
                templateUrl: "/View/html/NewUser.html",
                controller: 'userController'
            
            }).when("/Logging", {
                templateUrl: "/View/html/Logging.html",
                controller: 'loggingController'

            }).when("/Overview", {
                templateUrl: "/View/html/Overview.html",
                controller: 'OverviewController'       
                
            }).when("/Rapport", {
                templateUrl: "/View/html/Rapport.html",
                controller: 'RapportController'

            }).when("/NewCar", {
                templateUrl: "/View/html/NewCar.html",
                controller: 'NewCarController'

            }).when("/Supportchat", {
                templateUrl: "/View/html/Supportchat.html",
                controller: 'SupportChatController'        

            }).when("/Direcory", {
                templateUrl: "/View/directory/Directory.html",
                controller: 'DropDownController'
            }).otherwise({
                redirectTo: "/"
            });

     
    });


//app.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);

//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});

// (function ($rootScope, $location, Data) {
//    $rootScope.$on("$routeChangeStart", function (event, next, current) {
//        $rootScope.authenticated = false;
//        Data.get('session').then(function (results) {
//            if (results.uid) {
//                $rootScope.authenticated = true;
//                $rootScope.uid = results.uid;
//                $rootScope.name = results.name;
//                $rootScope.email = results.email;
//            } else {
//                var nextUrl = next.$$route.originalPath;
//                if (nextUrl == '/signup' || nextUrl == '/login') {

//                } else {
//                    $location.path("/login");
//                }
//            }
//        });
//    });
//});


    //}).controller('mainController', function ($scope) {
    //    $scope.title = "Main";
    //}).controller('userController', function ($scope) {
    //    $scope.title = "New User";
    //}).controller('editController', function ($scope) {
    //    $scope.title = "Edit User";
    //}).controller('loggingController', function ($scope) {
    //    $scope.title = "Logging user";
    //});

    


