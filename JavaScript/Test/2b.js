window.app = window.app || {};

window.app = (function(myObject){
    'use strict';

    let number = 0;

    myObject.getNumber = function () {
        return number;
    };

    myObject.increment = function () {
        number += 1;
    };

    return myObject;

    

}(window.app || {}));