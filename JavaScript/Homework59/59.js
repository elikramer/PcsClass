(function () {
    'use strict';

    const bodybutton = document.getElementById('backgroundButton');
    const textbutton = document.getElementById('textButton');

    bodyButton.addEventListener('click', event => {
        console.log("Hi aryeh.")
    });

    textButton.addEventListener('click', event => {
        console.log("Hi");
    });

}());