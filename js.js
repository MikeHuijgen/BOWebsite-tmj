const aantal = document.getElementById("js--aantal1");
const aantal = document.getElementById("js--aantal2");
const aantal = document.getElementById("js--aantal3");
const aantal = document.getElementById("js--aantal4");

const plus = document.getElementById("button1KinderenRechts");
const plus = document.getElementById("button2KinderenRechts");
const plus = document.getElementById("button3KinderenRechts");
const plus = document.getElementById("button4KinderenRechts");

const min = document.getElementById("button1KinderenLinks");
const min = document.getElementById("button2KinderenLinks");
const min = document.getElementById("button3KinderenLinks");
const min = document.getElementById("button4KinderenLinks");

const kosten = document.getElementById("js--kosten1")
const kosten = document.getElementById("js--kosten2")
const kosten = document.getElementById("js--kosten3")
const kosten = document.getElementById("js--kosten4")


plus.onclick = function () {
    if (parseInt(aantal.innerText) == 10) return;
    var getal = parseInt(aantal.innerText) + 1;
    aantal.innerText = getal;
    berekenPrijs("+");
}

min.onclick = function () {
    if (parseInt(aantal.innerText) == 0) return;
    var getal = parseInt(aantal.innerText) - 1;
    aantal.innerText = getal;
    berekenPrijs("-");

}

function berekenPrijs(oprater) {
    var getal = parseInt(kosten.innerText);
    if (oprater == "+") {
        kosten.innerText = getal + 5;
    }
    if (oprater == "-") {
        kosten.innerText = getal - 5;
    }
}

