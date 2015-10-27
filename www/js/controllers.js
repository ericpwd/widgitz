angular.module('starter.controllers', [])

.controller('FavesCtrl', function($scope) {
  
})

.controller('AllCtrl', function($scope) {
  
    $scope.widgets=[
        {
            title: 'Basic Math',
            href:'#/tab/basicmath',
            fave: false,
            uses:0   
        }
    ];
    
});
