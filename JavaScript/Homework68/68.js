/*global google*/

window.initMap = function(){
    'use strict';

    const location = {lat: 40.987654, lng: -74.221345};



const map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.SATELLITE
});

const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'BMG',
    icon: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEaZ1coQDu7ZwGqVhC6ZFKuIAwMa-s4HceTLaRJQZamuVPpdb3w',
        scaledSize: new google.maps.Size(50, 50)
    }
});


// setTimeout(() => {
//     map.setCenter({ lat: 40.1, lng: -74.3 });
// }, 5000);
};