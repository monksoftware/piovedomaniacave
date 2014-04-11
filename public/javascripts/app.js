angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope, $http) {
  $scope.forecast = "";
  $scope.element = document.getElementsByTagName('h1')[0];
  $scope.weatherData = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Cave&mode=json&units=metric&cnt=1&APPID=e21092a5856008cea4bc2ab452ab154a');
  $scope.resize = function() {
    $scope.element.setAttribute('style', 'line-height: ' + window.innerHeight + 'px; height: ' + window.innerHeight + 'px;');
  };

  $scope.weatherData.then(function(data) {
    $scope.forecast = data.data.list[0].weather[0].main === "Rain" ? "SI" : "NO";
    $scope.resize();
  });

  window.onresize = function() {
    $scope.resize();
  };
});