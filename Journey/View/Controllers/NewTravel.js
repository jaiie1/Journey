app.controller('travelController', function ($scope, $location, $rootScope, $http, $routeParams) {

   


    $scope.sum = function (KmStart, KmStop) {
        $scope.addition = parseInt(KmStart) + parseInt(KmStop);
    };

    //$http.get('/api/Carguides').then(function (response) {
    //    $scope.vehicles = response.data;
    //});

  

  

   

    $scope.getStartDes = function () {
        navigator.geolocation.getCurrentPosition(function (position, showError) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $scope.nr.StartDes = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.nr.StartDes);
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
                        $scope.nr.StopDes = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.nr.StopDes);
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

            kmStart: $scope.nr.KmStart,
            kmStop: $scope.nr.KmStop,
            addition: $scope.addition,
            startDes: $scope.StartDes,
            stgopDes: $scope.StopDes

        };

        
        $http({
            method: 'POST',
            url: '/api/Carguides',
            data: PostTrip
            //headers: {
            //    'Accept': 'application/json; charset=utf-8',
            //    'Content-Type': 'application/json; charset=utf-8'
            //}
        }).then(function (data) {
            $route.reload();
            console.log(data);
            
        });
    };

    //$scope.go = function (path) {
    //    $location.path(path);
    //};

});





