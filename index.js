const h1 = document.getElementById('h1');
const colourcode = document.getElementById('colorcode');
const rgbcode = document .getElementById('rgbcode');
const colorbox = document.getElementById('color-box');
const copyhex = document.getElementById('copy-btn');
const generation = document.getElementById('generate-btn');
const body = document.getElementById("body");


let color_code ='';
// this is the function that generate colors.
function generation(){
    const hexchars ='0123456789ABCDEF';
    let hexcolor ='#';
    
    for(let i=0; i < 6; i++)
}
hexcolor += hexchars[Math.floor(Math.random()*16)];
 //hex code
 colorbox.style.backgroundColor =hexcolor;
 colorbox.style.border =hexcolor;
 colorcode.innerhtml = hexcolor;
 colorcode.style.color =hexcolor;