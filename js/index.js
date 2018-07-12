var classApp = angular.module('weatherApp', []);
classApp.controller('weatherCtrl', function($scope, $http){
  var vm = $scope;
  vm.heading = "Weather App";
  
  
    vm.lat = "";
    vm.lon = "";
    
     $scope.fullName = function() {
        return vm.lat + " " + vm.lon;
    };
    //vm.lat = response.data.lat;
    //vm.lon = response.data.lon;
    $scope.wthrAp = function() {
    var apiKey = "680ac3cf2eb71d47bc37c9b19250d2b4";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+vm.lat+"&lon="+vm.lon+"&appid="+apiKey; 
    
    $http.get(openWeatherURL).then(function (response){
      console.log(openWeatherURL);
        vm.description = response.data.weather[0].description;
        vm.tempp = response.data.main.temp;
        vm.press = response.data.main.pressure;
        vm.hum = response.data.main.humidity;
        vm.wind = response.data.wind.speed;
        vm.con = response.data.sys.country;
        vm.sea = response.data.main.sea_level;
    }, function () {
        console.log("Invalid input");
    });
    };

});