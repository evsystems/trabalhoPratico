window.addEventListener('load', start);

var redV = 0;
var greenV = 0;
var blueV = 0;


function start() {


    function redAlt(event) {
        redV = parseInt(event.target.value);
        // colorRGB.style.backgroundColor = `rgb(${redV}, ${greenV}, ${blueV})`;
        redText.value = redV;
        updateOutput();
    }

    function greenAlt(event) {
        greenV = parseInt(event.target.value);
        //colorRGB.style.backgroundColor = `rgb (${redV}, ${greenV}, ${blueV})`;
        greenText.value = greenV;
        updateOutput();
    }

    function blueAlt(event) {
        blueV = parseInt(event.target.value);
        //colorRGB.style.backgroundColor = `rgb(${redV}, ${greenV}, ${blueV})`;
        blueText.value = blueV;
        updateOutput();
    }

    function updateOutput() {
        colorRGB.style.backgroundColor = `rgb(${redV}, ${greenV}, ${blueV})`;
    }

    var colorRGB = document.querySelector('.output');

    var redText = document.querySelector('#red-value');
    var redRange = document.querySelector('#red');

    var greenText = document.querySelector('#green-value');
    var greenRange = document.querySelector('#green');

    var blueText = document.querySelector('#blue-value');
    var blueRange = document.querySelector('#blue');

    redRange.value = 0;
    greenRange.value = 0;
    blueRange.value = 0;

    //colorRGB.style.backgroundColor = `rgb(${redV},${blueV},${greenV})`;

    redRange.addEventListener('change', redAlt);
    greenRange.addEventListener('change', greenAlt);
    blueRange.addEventListener('change', blueAlt);

}