angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope, $http) {
  $scope.forecast = "";
  $scope.element = document.getElementsByTagName('h1')[0];
  $scope.weatherData = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Cave&mode=json&units=metric&cnt=1&APPID=e21092a5856008cea4bc2ab452ab154a');
  $scope.resize = function() {
    $scope.element.setAttribute('style', 'line-height: ' + window.innerHeight + 'px; height: ' + window.innerHeight + 'px;');
  };

  $scope.weatherData.then(function(data) {
    var rainStatus = [500,501,502,503,504,511,520,521,522,531];
    $scope.forecast = rainStatus.indexOf(data.data.list[0].weater[0].id) != -1 ? "SI" : "NO";
    $scope.resize();
  });

  window.onresize = function() {
    $scope.resize();
  };
});
