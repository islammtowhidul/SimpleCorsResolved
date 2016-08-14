

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
   //$http.get('http://localhost:8080/angularDemoBakckend/rest/users').
	//$http.get('http://rest-service.guides.spring.io/greeting').
	$http.get('http://localhost:3000/quote/all').
	then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    	console.log(" data " , response);
		$scope.firstName = response.data;
		$scope.headers = response.headers();
		$scope.headerKey = response.headers("key1");
		

		//$scope.customHeaders1= response.heasders('key1');
		//$scope.customHeaders2 = response.headers('key2');
  });
});

