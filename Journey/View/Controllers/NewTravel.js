app.controller('travelController', function ($scope, $location, $rootScope, $http, $routeParams, $route, $filter) {

    if ($rootScope.Trip) {
        
        $http.get('/api/Carguides/' + $rootScope.Trip).then(function (response) {
            console.log(response.data);

            //$scope.date = $filter('date')(response.data.date, 'yyyy-MM-dd 00:00:00');
            $scope.date = new Date(response.data.date);
            $scope.KmStart = response.data.kmStart;
            $scope.KmStop = response.data.kmStop;
            $scope.addition = response.data.addition;
            $scope.StartDes = response.data.startDes;
            $scope.StopDes = response.data.stopDes;
            $scope.Andtek = response.data.andtek;
            $scope.Arende = response.data.arende;


            

        });

    }


    $scope.sum = function (KmStart, KmStop) {
        $scope.addition = parseInt(KmStart) + parseInt(KmStop);
    };

    $http.get('/api/Vehicles').then(function (response) {
        $scope.vehicles = response.data;
        console.log($scope.vehicles);
    });


    $scope.setVehicle = function () {
        $scope.vehicle = $scope.vehicle_value;
    };

  

   

    $scope.getStartDes = function () {
        navigator.geolocation.getCurrentPosition(function (position, showError) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $scope.StartDes = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.StartDes);
                    } else {
                        console.log("No results found.");
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                }
            });
        });
    };

    $scope.getslutDes = function () {
        navigator.geolocation.getCurrentPosition(function (position, showError) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $scope.StopDes = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.StopDes);
                    } else {
                        console.log("No results found.");
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                }
            });
        });
    };

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }


 

    $scope.SaveTrip = function () {

        var PostTrip = {
            date: $filter('date')($scope.date, 'yyyy-MM-dd'),
            kmStart: $scope.KmStart,
            kmStop: $scope.KmStop,
            addition: $scope.addition,
            startDes: $scope.StartDes,
            stopDes: $scope.StopDes,
            andtek: $scope.Andtek,
            arende: $scope.Arende

        };

        
        $http({
            method: 'POST',
            url: '/api/Carguides',
            data: PostTrip,
            headers: { 'Authorization': 'Bearer ' + $rootScope.token }
        }).then(function (data) {
            $route.reload();
            console.log(data);
            
        });
    };

    //$scope.go = function (path) {
    //    $location.path(path);
    //};

});





