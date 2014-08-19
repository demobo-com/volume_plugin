#import <Cordova/CDV.h>



/********* CDVCorHttpd.m Cordova Plugin Implementation *******/
#import "DDLog.h"
#import "DDTTYLogger.h"

@interface VolumePlugin : CDVPlugin

- (void)echo:(CDVInvokedUrlCommand*)command;

@end