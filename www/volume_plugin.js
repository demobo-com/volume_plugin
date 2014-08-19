
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var volume_exports = {};

volume_exports.echo = function(str, successCallback, failCallback) {
    if(successCallback == undefined) successCallback = function(){};
    if(failCallback == undefined) failCallback = function(){};
    if (str == undefined)
        str = "";
    cordova.exec(successCallback, failCallback, "VolumePlugin", "echo", [ str ]);
};

window.echo = volume_exports.echo;

module.exports = volume_exports;

