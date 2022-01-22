const myTitle = document.getElementById("myTitle");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById("knopNoord");
const knopOost = document.getElementById("knopOost");
const knopZuid = document.getElementById("knopZuid");
const knopWest = document.getElementById("knopWest");

let directionButtons = {
    "noord": document.getElementById("knopNoord"),
    "oost":  document.getElementById("knopOost"),
    "zuid":  document.getElementById("knopZuid"),
    "west":  document.getElementById("knopWest")
}

let current_index = 0;

let locaties = [
    {
        "title":"plaats 0",
        "image":"img/Inganguitgang.jpg",
        "directions": {
            "noord": 1
        }
    },

    {
        "title":"plaats 1",
        "image":"img/Trappenhuis.jpg",
        "directions": {
            "noord": 2, 
            "oost":  3, 
            "zuid":  0,
            "west":  4
        }
    },

    {
        "title":"plaats 2",
        "image":"img/Kamer2.jpg",
        "directions": {
            "zuid":  1
        }
    },

    {
        "title":"plaats 3",
        "image":"img/Kamer3.jpg", 
        "directions": {
            "zuid": 1
        }
    },

    {
        "title":"plaats 4",
        "image":"img/Kamer4.jpg",
        "directions": {
            "zuid": 1
        }
    },
]

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImg.src = locaties[index].image;
    current_index = index;

    updateDirections()
}

function updateDirections(){
    let possible = locaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons); 

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput(){
    show(myInput.value); 
    myInput.value = "";
    myInput.focus();
}
function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    console.log(punt_index);
    show(punt_index); 
}

show(0); 