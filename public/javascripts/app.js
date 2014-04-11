angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope, $http) {
  $scope.forecast = "";
  $scope.icon = "sole";
  $scope.element = document.getElementsByTagName('h1')[0];
  $scope.weatherData = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Cave&mode=json&units=metric&cnt=1&APPID=e21092a5856008cea4bc2ab452ab154a');
  $scope.resize = function() {
    $scope.element.setAttribute('style', 'line-height: ' + window.innerHeight + 'px; height: ' + window.innerHeight + 'px;');
  };

  $scope.weatherData.then(function(data) {
    var rainStatus = [500,501,502,503,504,511,520,521,522,531];
    if(rainStatus.indexOf(data.data.list[0].weather[0].id) != -1){
      $scope.forecast = "SI";
      $scope.icon = "pioggia";
    }else{
      $scope.forecast = "NO";
      $scope.icon = "sole";
    } 
    $scope.resize();
  });

  window.onresize = function() {
    $scope.resize();
  };
});
