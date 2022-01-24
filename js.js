const aantal0 = document.getElementById("js--aantal1");
const aantal1 = document.getElementById("js--aantal2");
const aantal2 = document.getElementById("js--aantal3");
const aantal3 = document.getElementById("js--aantal4");

const plus0 = document.getElementById("button1KinderenRechts");
const plus1 = document.getElementById("button2KinderenRechts");
const plus2 = document.getElementById("button3KinderenRechts");
const plus3 = document.getElementById("button4KinderenRechts");

const min0 = document.getElementById("button1KinderenLinks");
const min1 = document.getElementById("button2KinderenLinks");
const min2 = document.getElementById("button3KinderenLinks");
const min3 = document.getElementById("button4KinderenLinks");

const kosten0 = document.getElementById("js--kosten1")
const kosten1 = document.getElementById("js--kosten2")
const kosten2 = document.getElementById("js--kosten3")
const kosten3 = document.getElementById("js--kosten4")

/*0*/
plus0.onclick = function () {
    if (parseInt(aantal0.innerText) == 10) return;
    var getal = parseInt(aantal0.innerText) + 1;
    aantal0.innerText = getal;
    berekenPrijs0("+");
}

min0.onclick = function () {
    if (parseInt(aantal0.innerText) == 0) return;
    var getal = parseInt(aantal0.innerText) - 1;
    aantal0.innerText = getal;
    berekenPrijs0("-");

}

function berekenPrijs0(oprater) {
    var getal = parseInt(kosten0.innerText);
    if (oprater == "+") {
        kosten0.innerText = getal + 1;
    }
    if (oprater == "-") {
        kosten0.innerText = getal - 1;
    }
}

/*1*/
plus1.onclick = function () {
    if (parseInt(aantal1.innerText) == 10) return;
    var getal = parseInt(aantal1.innerText) + 1;
    aantal1.innerText = getal;
    berekenPrijs1("+");
}

min1.onclick = function () {
    if (parseInt(aantal1.innerText) == 0) return;
    var getal = parseInt(aantal1.innerText) - 1;
    aantal1.innerText = getal;
    berekenPrijs1("-");

}

function berekenPrijs1(oprater) {
    var getal = parseInt(kosten1.innerText);
    if (oprater == "+") {
        kosten1.innerText = getal + 19;
    }
    if (oprater == "-") {
        kosten1.innerText = getal - 19;
    }
}

/*2*/
plus2.onclick = function () {
    if (parseInt(aantal2.innerText) == 10) return;
    var getal = parseInt(aantal2.innerText) + 1;
    aantal2.innerText = getal;
    berekenPrijs2("+");
}

min2.onclick = function () {
    if (parseInt(aantal2.innerText) == 0) return;
    var getal = parseInt(aantal2.innerText) - 1;
    aantal2.innerText = getal;
    berekenPrijs2("-");

}

function berekenPrijs2(oprater) {
    var getal = parseInt(kosten2.innerText);
    if (oprater == "+") {
        kosten2.innerText = getal + 19;
    }
    if (oprater == "-") {
        kosten2.innerText = getal - 19;
    }
}

/*3*/
plus3.onclick = function () {
    if (parseInt(aantal3.innerText) == 10) return;
    var getal = parseInt(aantal3.innerText) + 1;
    aantal3.innerText = getal;
    berekenPrijs3("+");
}

min3.onclick = function () {
    if (parseInt(aantal3.innerText) == 0) return;
    var getal = parseInt(aantal3.innerText) - 1;
    aantal3.innerText = getal;
    berekenPrijs3("-");

}

function berekenPrijs3(oprater) {
    var getal = parseInt(kosten3.innerText);
    if (oprater == "+") {
        kosten3.innerText = getal + 10;
    }
    if (oprater == "-") {
        kosten3.innerText = getal - 10;
    }
}