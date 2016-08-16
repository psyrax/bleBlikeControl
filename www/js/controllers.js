angular.module('blecontrol.controllers', [])

.controller('LightsCtrl', function($scope) {})

.controller('DevicesCtrl', function($scope, BleCommands) {
  $scope.bleDevices = [];
  $scope.selectedName = "";
  BleCommands.scan(function(device){
    $scope.$apply(function(){
      $scope.bleDevices.push(device);
    });
  });
  $scope.selectDevice = function(device){
    BleCommands.setDevice(device);
    $scope.selectedName = device.name;
  };
});
