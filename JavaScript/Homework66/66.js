(function (){
    'use strict';

    const videoUL = $("#myVideos");
    const vid = $("video");

    fetch("66.json")
    .then(function (myResponse){
        if(myResponse.ok){
            return myResponse.json();
        }
        else{

        }
    })
    .then(function(myJSON){
        myJSON.forEach(video => {
        const myLi = $(`<li>${video.title} <img src="${video.picture}"></img></li>`);
        videoUL.append(myLi); 
        myLi.click(() => {
            vid.attr('src', video.url);
            vid[0].play();
        });
        });
        
    });



}());