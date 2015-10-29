angular.module('starter.controllers', [])

.controller('FavesCtrl', function($scope) {
  
})

.controller('AllCtrl', function($scope, $location) {
  
    $scope.widgets=[
        {
            title: 'Basic Math',
            href:'/tab/basicmath',
            fave: false,
            uses:0,
            go: function () {
                $location.path(this.href)
            }   
        }
    ];

    $scope.basicmath={
    	number1:null,
    	number2:null,
    	answer:null,
    	add: function  (n1, n2) {
    		$scope.basicmath.answer = parseFloat(n1) + parseFloat(n2);
    	},
    	multiply: function (n1, n2) {
    		$scope.basicmath.answer = parseFloat(n1) * parseFloat(n2);
    	},
    	substract: function (n1, n2) {
    		$scope.basicmath.answer = parseFloat(n1) - parseFloat(n2);
    	},
    	divide: function (n1, n2) {
    		$scope.basicmath.answer = parseFloat(n1) / parseFloat(n2);
    	}
    }
    
});
