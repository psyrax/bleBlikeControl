angular.module('blecontrol.services', [])

.factory('BleCommands', function($rootScope) {
  var selectedBle = null;
  return {
    scan: function(cb) {
      var _this = this;
      console.log('called');
      ble.scan([], 30, function(device) {
        cb(device);
      }, function(){
        console.log('error');
      });
    },
    setDevice: function(device){
      selectedBle = device;
      ble.connect(device.id, function(deviceData){
        selectedBle = deviceData;
        console.log('device',deviceData);
        var adData = new Uint8Array(device.advertising);
        console.log('ads',adData);
      }, function(){
        selectedBle = null;
      });
    }
  };
});
