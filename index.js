const H1 = document.getElementById('h1');
const colorCode = document.getElementById('colorCode');
const rgbcode = document .getElementById('rgbcode');
const colorBox = document.getElementById('color-box');
const copyHex = document.getElementById('copy-btn');
const generation = document.getElementById('generate-btn');
const body = document.getElementById("body");


let color_code ='';

// this is the function that generate colors.
function generation() {
    const hexcharacter ='0123456789ABCDEF';
    let hexColor ='#';
    
    for(let i=0; i < 6; i++){
        hexColor += hexcharacter[Math.floor(Math.random()*16)];
}

 //hex code
 colorBox.style.backgroundColor =hexColor;
 colorBox.style.border =hexColor;
 colorCode.innerhtml = hexColor;
 colorCode.style.color =hexColor;

  //rgb code
  const colortext =colorBox.style.backgroundColor;
  rgbcode.innerHTML = colortext
  rgbcode,style.color = colortext;

  //h1
  h1.style.color = hexcolor;

  //body
  //body,.style.backgroundcolor = hexcolor;
}  

//This is the func... that copy hexcode
function CopyHEX() {
    const colorTest = colorBox.style.backgroundColor;
    const hexCode = rgbtoHex(colorTest);
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = hexCode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('color copied to clipboard' + hexCode);
}

function rgbtoHex(hexColor) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(hexColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

//RESET
function ResetBtn() {
    colorCode.innerHTML = null
    colorBox.style.backgroundColor = null
    rgbcode.innerHTML = null
    H1.style.color = null
    Body.style.backgroundColor = null;
};



//copy copied
function RGB() {
    const colortext = colorBox.style.backgroundColor;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = colortext;
    tempInput.select();
    document.execCommand('copy')
    document.body.removeChild(tempInput);
    alert('color copied to clipboard: ' + colortext);
};