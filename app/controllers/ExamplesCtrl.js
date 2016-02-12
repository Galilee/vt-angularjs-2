module.exports = function($scope, MyProvider, MyService, MyFactory) {

    $scope.serviceValue = MyService.getValue();
    $scope.factoryValue = MyFactory.getValue();
    $scope.providerValue = MyProvider.getValue();
}
