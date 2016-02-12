module.exports = function($scope, $state) {
    $scope.query = "";
    $scope.searchAction = function(){
        console.log('ici');
        $state.go("/search/" + $scope.query);
    }

}