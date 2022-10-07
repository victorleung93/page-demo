
var p = document.querySelector("p");
let xhr = new XMLHttpRequest();
var img = 0;
var source;
var pageTimeout = setTimeout(next,5000);
var circleBar = document.getElementById("circle").style;
var image1 = document.getElementById("image1").style;
//using jquery
$(document).ready(function(){
  $("#return").click(function() {
    img = 0;
    importImage();
    setpageTimeOut();
  });
  $("#back").click(function() {
    img--;
    if (img < 0) {
      img = 9;
    }
    importImage();
    setpageTimeOut()
  });
  $("#next").click(function() {
    img++;
    if (img >= 10) {
      img = 0;
    }
    importImage();
    setpageTimeOut()
  });
});

function next() {
  img++;
  if (img >= 10) {
    img = 0;
  }
  importImage();
  pageTimeout = setTimeout(next,5000);
}

function importImage() {
  circleBar.setProperty("animation", null);
  source = "image/image" + img + ".webp";
  xhr.open("get", source);
  xhr.onload = function() {
    var photo = document.getElementById('image1').src = xhr.responseURL;
  }
  xhr.send();
  display();
  clearpageTimeOut()
  resetProgress();
}

function clearpageTimeOut() {
    clearTimeout(pageTimeout);
}
function setpageTimeOut(){
  clearTimeout(pageTimeout);
  pageTimeout = setTimeout(next,5000);
}

function display() {
  document.getElementById("pokename").innerHTML = "Name: " + pokemonList[img].name;
  document.getElementById("index").innerHTML = "Number: " + pokemonList[img].index;
  document.getElementById("type").innerHTML = "Type: " + pokemonList[img].type;
}
window.onload = function() {
  display();
}


function resetProgress() {
  circleBar.setProperty("-webkit-animation","none");
  setTimeout(function() {
        circleBar.webkitAnimation = '';
    }, 10);

  image1.setProperty("-webkit-animation","none");
  setTimeout(function() {
        image1.webkitAnimation = '';
    }, 10);
}

var pokemonList = [
  {
    "name" : "Flygon",
    "index" : "330",
    "type" : "Ground and Dragon"
  },
  {
    "name" : "Bulbasaur",
    "index" : "001",
    "type" : "Grass and Poison"
  },
  {
    "name" : "Squirtle",
    "index" : "007",
    "type" : "Water"
  },
  {
    "name" : "Charmander",
    "index" : "004",
    "type" : "Fire"
  },
  {
    "name" : "Pikachu",
    "index" : "025",
    "type" : "Electric"
  },
  {
    "name" : "Sprigatito",
    "index" : "906",
    "type" : "Grass"
  },
  {
    "name" : "Quaxly",
    "index" : "909",
    "type" : "Water"
  },
  {
    "name" : "Fuecoco",
    "index" : "912",
    "type" : "Fire"
  },
  {
    "name" : "Koraidon",
    "index" : "Unknown",
    "type" : "Unknown"
  },
  {
    "name" : "Miraidon",
    "index" : "Unknown",
    "type" : "Unknown"
  }
]
