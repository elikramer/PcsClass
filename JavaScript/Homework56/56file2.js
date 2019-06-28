window.myApp = window.myApp || {};

window.myApp.Utils = (function (myObject) {
   
    'use strict';
    
    myObject.stringCaseInsensitiveEquals = function(string1, string2){
        if(string1.toUpperCase() === string2.toUpperCase()){
            return true;
        }
        return false;
    }

    return myObject;

}(window.myApp.Utils || {}));

