let lon = document.getElementById("onn");
let loff= document.getElementById('off');
let bulb= document.getElementById('img');
lon.addEventListener("click", lonn);
off.addEventListener("click", lofff);

function lonn() {
    bulb.src="bulbon.gif";
}

function lofff() {
    bulb.src="bulboff.gif";
}

let caixa = document.getElementById('box');

caixa.addEventListener('mouseenter', entrou);
caixa.addEventListener('mouseout', fora);
caixa.addEventListener('click', apertou);
function entrou() {
    caixa.innerHTML = "Mouse in :)";
    caixa.style.backgroundColor='Dodgerblue';
}

function fora() {
    caixa.innerHTML="Mouse out :D";
    caixa.style.backgroundColor="green";
}
function apertou() {
    caixa.innerHTML="Apertou :))";
    caixa.style.backgroundColor="yellow";
}