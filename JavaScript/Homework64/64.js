(function (){
    'use strict';

    $('#loadButton').click(function(){

    const myBuffer = $('#buffer');
    
    myBuffer.show();

    const userInput = $('#loadIn').val();

    const request = new XMLHttpRequest();

    request.open("GET", userInput);
    request.send();

    

    request.onload = function(){
        if(request.status < 400){
            setTimeout(function(){$("#loader").text(request.responseText); myBuffer.hide()},5000); 
            
        }
        else{
            // setTimeout()
             myBuffer.hide();
            
        }
    };

    });

}());

