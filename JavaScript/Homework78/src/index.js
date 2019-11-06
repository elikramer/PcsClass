/*global $*/
//(function () {
//    'use strict';

import $ from 'jquery';
import './css/index.css';
import House from './images/Home.jpg';
// const $ = require('jquery');

let clicks = 0;
//const results = $('#results');

$('#theButton').click(() => {
    $('#results')/*results*/.text(`You clicked me ${++clicks} times`);
});

const houseImage = document.createElement('img');
    houseImage.src = House;
    document.body.appendChild(houseImage);

//}());