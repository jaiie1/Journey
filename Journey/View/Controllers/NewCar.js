app.controller('NewCarController', function ($scope, $http, $rootScope, $route) {
             
   
    $http.get('/api/Vehicles').then(function (response) {
        $scope.vehicles = response.data;
    });

        // Set vehicle to default
        $scope.setAsDefault = function (asDefault) {
            console.log("As default");
            console.log(asDefault);

        };

        // Skicka in status active/inactive
        $scope.setStatus = function (vehicleActive,status) {

            // Denna ska debugga
            console.log("set Status");
            console.log(vehicleActive);
            console.log(vehicleActive.Active);
            vehicleActive.active = status;
            // Skicka in true or false
            $http({
                method: 'PUT',
                url: '/api/Vehicles' + '/' + vehicleActive.vehicleId,
                data: vehicleActive
            }).then(function (data) {
                
                
                
                $route.reload();
            });

        };

    
        $scope.addVehicle = function () {

            var PostObject = {
                regNr: $scope.nr.RegNr
            };

            $http({
                method: 'POST',
                url: '/api/Vehicles',
                data: PostObject
                //headers: {
                //    'Authorization': 'Bearer ' + $rootScope.token
                //}          

            }).then(function (data) {
                $route.reload();
                console.log(data);
                
            });

        };

    $scope.setVehicle = function () {
        $scope.vehicle = $scope.vehicle_value;
    };

        $scope.deleteVehicle = function (vehicle) {
            $http({
                method: 'DELETE',
                url: '/api/Vehicles' + '/' + vehicle.vehicleId
            })

                .then(function (data) {
                    console.log(data);
                    $route.reload();
                });
        };
    
});

//method: 'GET',
//    //headers: { 'Authorization': 'Bearer' + $rootScope.token },
//    url: 'api/Vehicles/5'
//    }).then(function (response) {
//    $scope.vehicles = response.data;
//}, function (error) {
//    console.log(error);
//});














//};

//// Delete vehicle from the database:
//$scope.deleteVehicle = function (vehicle) {
//    $http({
//        method: 'DELETE',
//        url: '/api/Carguides/5' + '/' + vehicle.VehicleId
//    })
//        // Reloads the page after deleting a vehicle from the database:
//        .then(function (data) {
//            console.log(data);
//            $route.reload();
//        });
//};



