const aantal = document.getElementById ("js--aantal");
const plus = document.getElementById("button1KinderenRechts");
const min = document.getElementById("button1KinderenLinks");
const kosten = document.getElementById("js--kosten")

plus.onclick = function(){
    if(parseInt(aantal.innerText) == 10) return;
    var getal = parseInt(aantal.innerText) + 1; 
    aantal.innerText = getal; 
    berekenPrijs("+"); 
}

min.onclick = function(){
    if(parseInt(aantal.innerText) == 0) return;
    var getal = parseInt(aantal.innerText) - 1; 
    aantal.innerText = getal; 
    berekenPrijs("-"); 
}

function berekenPrijs(oprater){
    var getal = parseInt(kosten.innerText);
    if(oprater == "+"){
        kosten.innerText = getal + 5;
    }
    if(oprater == "-"){
        kosten.innerText = getal - 5;
    }
}