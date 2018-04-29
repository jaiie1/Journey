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

//$httpProvider.defaults.transformRequest = function (data) {
//    if (data === undefined)
//        return data;
//    var clonedData = $.extend(true, {}, data);
//    for (var property in clonedData)
//        if (property.substr(0, 1) == '$')
//            delete clonedData[property];

//    return $.param(clonedData);
//};





    


