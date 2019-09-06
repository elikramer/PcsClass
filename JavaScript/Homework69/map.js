/*global google, $*/

window.initMap = function(){
    'use strict';

    const markers = [];

    const location = { 
        lat : 40.0821,
        lng : -74.2097
    };

    const map = new google.maps.Map(document.getElementById("map"),{center: location, zoom: 12, mapTypeId: google.maps.MapTypeId.SATELLITE});

    const theButton = $("#goButton");
    theButton.click(getData);

    function getData(){
        const catchInput = $("#inputGo");
        const inputVal = catchInput.val();
        fetch(`http://api.geonames.org/wikipediaSearch?username=elikramer&type=json&q=${inputVal}`)
        .then(function(getter){
            return getter.json();
        })
        .then(function(data){
            console.log(data);
        });

    }

    const drawingManager = new google.maps.drawing.DrawingManager();

    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function callback(event){
        console.log(event);
        if (event.type === 'marker') {
           markers.push(event.overlay.position);
           localStorage.mymarkers  = JSON.stringify(markers);
        }
    });

};