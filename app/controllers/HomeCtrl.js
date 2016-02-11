module.exports = function($scope, MyService, MyFactory, MyProvider) {
    $scope.serviceValue = MyService.getValue();
    $scope.factoryValue = MyFactory.getValue();

}