app.controller('loggingController', function ($scope, $http, authService, $location) {
    var vm = this;

    vm.token = "";

    vm.Login = function () {
        var data = "grant_type=password&username=" + vm.username + "&password=" + vm.password;
        $http.post('/token', data, { headers: { ' Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {

            vm.token = response.data.access_token;


        }, function (err, status) {
            console.log(err);

        });
    };

    vm.tryGet = function () {
        $http.get('/api/trips/gettrips', { headers: { 'Authorization': 'Bearer' + vm.token } }).then(function (response) {
            vm.responseFromApi = response;
        }, function (error) {
            vm.responseFromApi = error;

        });

    };


});


angular.module("app").factory("myOtherService", function () {
    return {
        logsomething: function () {
            console.log('Logging someting in factory');
        }
    };

});


//$(function () {

//    $('#login-form-link').click(function (e) {
//        $("#login-form").delay(100).fadeIn(100);
//        $("#register-form").fadeOut(100);
//        $('#register-form-link').removeClass('active');
//        $(this).addClass('active');
//        e.preventDefault();
//    });
//    $('#register-form-link').click(function (e) {
//        $("#register-form").delay(100).fadeIn(100);
//        $("#login-form").fadeOut(100);
//        $('#login-form-link').removeClass('active');
//        $(this).addClass('active');
//        e.preventDefault();
//    });

//});