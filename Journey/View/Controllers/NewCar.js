app.controller('NewCarController', function ($scope, $http, $rootScope, $route) {
    $scope.addVehicle = {};
    

    var dataObject = {
        regNr: $scope.RegNr,
        name: $scope.name
    };

 

    
    //$http({
    //    method: 'GET',
    //    headers: { 'Authorization': 'Bearer' + $rootScope.token },
    //    url: '/api/Vehicles/'
    //}).then(function (response) {
    //    $scope.vehicles = response.data;
    //}, function (error) {
    //    console.log(error);
    //});

    // Post new vehicle to the database:
    $scope.addVehicle = function () {
        $http({
            method: 'POST',            
            url: '/api/Vehicles',
            data: dataObject,
            headers: { 'Authorization': 'Bearer' + $rootScope.token }
            // Passes in the data as a string.
            
    
        })
            // Reloads the page after posting a new vehicle to the database:
            .then(function (data) {
                console.log(data);
                $route.reload();
            });
    };

    // Delete vehicle from the database:
    $scope.deleteVehicle = function (vehicle) {
        $http({
            method: 'DELETE',
            url: '/api/Carguides/5' + '/' + vehicle.VehicleId
        })
            // Reloads the page after deleting a vehicle from the database:
            .then(function (data) {
                console.log(data);
                $route.reload();
            });
    };

});

