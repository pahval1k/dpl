'use strict';

myApp.service('loadingMaskService',['$timeout', function ($timeout) {
    
    var observerCallback;
    var _self = this;
    var deferTimeout; 
    this.hasPendingRequests = false;
    
    //register an observer
    this.registerObserver = function(callback){
        observerCallback = callback;
    };
    
    var notifyObserver = function(){
       if (observerCallback) { 
           observerCallback();
       } else { 
           console.log("notify observer is empty");   
       }
    };
    
    this.sendRequest = function() { 
        if (deferTimeout) {
          $timeout.cancel(deferTimeout);   
        }
        _self.hasPendingRequests = true;
        notifyObserver();
        console.log(this.hasPendingRequests);   
        deferTimeout = $timeout(function() { 
            _self.hasPendingRequests = false;
            console.log(_self.hasPendingRequests);  
            notifyObserver();
            deferTimeout = null;
        }, 3000);
    }
    
}]);