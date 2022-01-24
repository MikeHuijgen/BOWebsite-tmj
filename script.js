const myTitle = document.getElementById("h3RouteInfo");
const myInfo = document.getElementById("pRouteInfo");

let directionButtons = {
    "knop1": document.getElementById("knopNoord"),
    "knop2":  document.getElementById("knopOost"),
    "knop3":  document.getElementById("knopZuid"),
    "knop4":  document.getElementById("knopWest"),
    "knopTerug": document.getElementById("knopTerug")
}

let current_index = 0;

let locaties = [
    {
        "h3RouteInfo":"plaats hey",
        "pRouteInfo": ";oufyrfiorigf",
        "image":"img/Inganguitgang.jpg",
        "directions": {
            "knop1": 1
        }
    },

    {
        "h3RouteInfo":"plaats 1",
        "pRouteInfo": "Dit is de mooie ingang van het mooie museum",
        "image":"img/Trappenhuis.jpg",
        "directions": {
            "knop3": 3, 
            "knop2": 2,
            "knop4": 4,
            "knopTerug": 0
        }
    },

    {
        "h3RouteInfo":"plaats 2",
        "pRouteInfo": "Dit is de mooie ingang van het mooie museum",
        "image":"img/Kamer2.jpg",
        "directions": {
            "knopTerug": 1
        }
    },

    {
        "h3RouteInfo":"plaats 3",
        "pRouteInfo": "Dit is de mooie ingang van het mooie museum",
        "image":"img/Kamer3.jpg", 
        "directions": {
            "knopTerug": 1
        }
    },

    {
        "h3RouteInfo":"plaats 4",
        "pRouteInfo": "Dit is de mooie ingang van het mooie museum",
        "image":"img/Kamer4.jpg",
        "directions": {
            "knopTerug": 1
        }
    },
]

function show(index){
    myTitle.innerHTML = locaties[index].h3RouteInfo;
    myInfo.innerHTML = locaties[index].pRouteInfo;
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