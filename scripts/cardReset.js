let cardBlock = document.getElementById("price__card");
let Th2 = document.getElementById("Ph2");
let Th3 = document.getElementById("Ph3");
let Tp = document.getElementById("Pp");
let Ta = document.getElementById("Pa");

// Block one

cardBlock.onmouseover = function() {
    Th2.style.color = "#212121";
    Th3.style.color = "#212121";
    Tp.style.color = "#212121";
    Ta.style.color = "#fff";
    Ta.style.backgroundColor = "#212121";
}
cardBlock.onmouseout = function() {
    Th2.style.color = "#fff";
    Th3.style.color = "#fff";
    Tp.style.color = "#ababab";
    Ta.style.color = "#212121";
    Ta.style.backgroundColor = "#00c5ff";
}

// Block two

let cardBlock2 = document.getElementById("price__card2");
let Th22 = document.getElementById("Ph22");
let Th32 = document.getElementById("Ph32");
let Tp2 = document.getElementById("Pp2");
let Ta2 = document.getElementById("Pa2");

cardBlock2.onmouseover = function() {
    Th22.style.color = "#212121";
    Th32.style.color = "#212121";
    Tp2.style.color = "#212121";
    Ta2.style.color = "#fff";
    Ta2.style.backgroundColor = "#212121";
}
cardBlock2.onmouseout = function() {
    Th22.style.color = "#fff";
    Th32.style.color = "#fff";
    Tp2.style.color = "#ababab";
    Ta2.style.color = "#212121";
    Ta2.style.backgroundColor = "#00c5ff";
}

// Block three

let cardBlock3 = document.getElementById("price__card3");
let Th23 = document.getElementById("Ph23");
let Th33 = document.getElementById("Ph33");
let Tp3 = document.getElementById("Pp3");
let Ta3 = document.getElementById("Pa3");

cardBlock3.onmouseover = function() {
    Th23.style.color = "#212121";
    Th33.style.color = "#212121";
    Tp3.style.color = "#212121";
    Ta3.style.color = "#fff";
    Ta3.style.backgroundColor = "#212121";
}
cardBlock3.onmouseout = function() {
    Th23.style.color = "#fff";
    Th33.style.color = "#fff";
    Tp3.style.color = "#ababab";
    Ta3.style.color = "#212121";
    Ta3.style.backgroundColor = "#00c5ff";
}