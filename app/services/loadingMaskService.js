'use strict';

// this service is used to display loading mask during loading page.
// just emulates outgoing http requests 
myApp.service('loadingMaskService',['$timeout', function ($timeout) {
    
    var observerCallback;
    var _self = this;
    var deferTimeout; 
    this.hasPendingRequests = false; // states that represents whether there are outgoing requests
    
    //register an observer
    this.registerObserver = function(callback){
        observerCallback = callback;
    };
    
    var notifyObserver = function(){ // notify that there are changes and observer callback should be called to apply changes
       if (observerCallback) { 
           observerCallback();
       } else { 
           throw "notify observer is empty"; 
       }
    };
    
    this.sendRequest = function() { // emulates outgoing requests. 
        if (deferTimeout) {
          $timeout.cancel(deferTimeout);   
        }
        _self.hasPendingRequests = true;
        notifyObserver();
        deferTimeout = $timeout(function() { 
            _self.hasPendingRequests = false; 
            notifyObserver();
            deferTimeout = null;
        }, 3000);
    }
    
}]);