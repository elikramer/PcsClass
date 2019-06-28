window.myApp = window.myApp || {};

window.myApp.Utils = (function (myObject) {
   
    'use strict';
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    myObject.getDayName = function(index) {
        return days[index - 1];
    };

    myObject.getDayIndex = function(name) {
        for(let i = 0; i < days.length; i++){
            if(name === days[i]){
                return i + 1;
            }
        }
        return 'Invalid day';
    }

    return myObject;

}(window.myApp.Utils || {}));








