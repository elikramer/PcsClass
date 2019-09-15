(function (){
    'use strict';

    let dragging = false;
    let offset;

    $(document)
    .on ('mousedown', '.small', function ( event) {
        dragging = $(event.target);
        offset = { y: event.offsetY, x: event.offsetX };
        console.log('down', event);
    }).mousemove(function(event){
        if(dragging){
            dragging.css({ top: event.pageY - offset.y, left: event.pageX - offset.x });
            console.log('move', event);
        }
        
        event.preventDefault();
    }).mouseup(function(event){
        dragging = null;
        console.log('up', event);
    })
    
        
    


}())