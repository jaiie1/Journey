app.controller('travelController', function ($scope, $http, $authService, $location, $rootscope) {
    
    $http.GetVehicle = "Hämta Bil från Databas";
    $scope.DataInfo = {
        startM: "",
        slutM: "",
        ResaKm: "",
        StartAdress: "",
        DesAdress:""

    };

});




