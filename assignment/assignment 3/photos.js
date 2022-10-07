/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case
 *    Photo gallery
 *    Variables and functions
 *    Author: Ching Yiu Leung
 *    Date: 10/06/2022
 *    Filename: photos.js
 */
 "use strict"; // interpret document contents in JavaScript strict mode
/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var zoomImg;
var imgNum;
var favImgNum = 0;
var removeRunner = 0;
var filename;
var currentFig;
//var autoAdvance = setInterval(rightAdvance, 2500);
/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
  if (figureCount === 3) {
    for (var i = 1; i < 4; i++) {
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i - 1];
      currentFig.src = filename;
      zoomImg = photoOrder[i] - 1;
      }
  }
  else {
    for (var i = 0; i < 5; i++) {
    filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
    currentFig = document.getElementsByTagName("img")[i];
    currentFig.src = filename;
    zoomImg = photoOrder[i] + 3 ;
    }
  }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
/*function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}*/

function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */

function leftArrow() {
   //clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive()
{
  var articleEl = document.getElementsByTagName("article")[0];
  var lastFigure = document.createElement("figure");
  lastFigure.id = "fig5";
  lastFigure.style.zIndex = "5";
  lastFigure.style.position = "absolute";
  lastFigure.style.right = "45px";
  lastFigure.style.top = "67px";
  var lastImage = document.createElement("img");
  lastImage.width = "240";
  lastImage.height = "135";
  lastFigure.appendChild(lastImage);

  articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));
  var firstFigure = lastFigure.cloneNode(true);
  firstFigure.id = "fig1";
  firstFigure.style.right = "";
  firstFigure.style.left = "45px";

  articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
  figureCount = 5;
  document.getElementsByTagName("img")[0].src = "images/IMG_0"
  + photoOrder[0] + "sm.jpg";
  document.getElementsByTagName("img")[4].src = "images/IMG_0"
  + photoOrder[4] + "sm.jpg";
  var numberButton = document.querySelector("#fiveButton p");
  numberButton.innerHTML = "Show fewer images";
  if (numberButton.addEventListener) {
    numberButton.removeEventListener("click", previewFive,
    false);
    numberButton.addEventListener("click", previewThree,
    false);
  }
  else if (numberButton.attachEvent) {
    numberButton.detachEvent("onclick", previewFive);
    numberButton.attachEvent("onclick", previewThree);
  }

}

function previewThree() {
  var articleEl = document.getElementsByTagName("article")[0];
  var numberButton = document.querySelector("#fiveButton p");
  articleEl.removeChild(document.getElementById("fig1"));
  articleEl.removeChild(document.getElementById("fig5"));
  figureCount = 3;
  numberButton.innerHTML = "Show more images";
  if (numberButton.addEventListener) {
    numberButton.removeEventListener("click", previewThree,
    false);
    numberButton.addEventListener("click", previewFive, false);
  }
  else if (numberButton.attachEvent) {
    numberButton.detachEvent("onclick", previewThree);
    numberButton.attachEvent("onclick", previewFive);
    }
  }
/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
  var leftarrow = document.getElementById("leftarrow");
  if (leftarrow.addEventListener) {
    leftarrow.addEventListener("click", leftArrow, false);
    }
  else if (leftarrow.attachEvent) {
    leftarrow.attachEvent("onclick", leftArrow);}

  var rightarrow = document.getElementById("rightarrow");
  if (rightarrow.addEventListener) {
    rightarrow.addEventListener("click", rightArrow, false);
    }
  else if (rightarrow.attachEvent) {
    rightarrow.attachEvent("onclick", rightArrow);
  }
  var mainFig = document.getElementsByTagName("img")[1];
  if (mainFig.addEventListener) {
    mainFig.addEventListener("click", zoomFig, false);
  }
  else if (mainFig.attachEvent) {
    mainFig.attachEvent("onclick", zoomFig);
  }
  var showAllButton = document.querySelector("#fiveButton p");
  if (showAllButton.addEventListener) {
    showAllButton.addEventListener("click", previewFive, false);
  }
  else if (showAllButton.attachEvent) {
    showAllButton.attachEvent("onclick", previewFive);
  }
}
/* open center figure in separate window */
function zoomFig() {
  var propertyWidth = 960;
  var propertyHeight = 600;
  var winLeft = ((screen.width - propertyWidth) / 2);
  var winTop = ((screen.height - propertyHeight) / 2);
  var winOptions = "width=960,height=600";
  winOptions += ",left=" + winLeft;
  winOptions += ",top=" + winTop;
  localStorage.setItem("zoomImg",zoomImg)
  var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
  zoomWindow.focus();
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

function favUpdate() {
  favImgNum++;
  var favourite = localStorage.getItem("storageFav");

  if (favImgNum <= 5) {
    var img = document.createElement("img");
    img.src = favourite;

    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");
    document.getElementById("favouriteList").insertBefore(newDiv, currentDiv);
    var newDivId = "favPhoto" + favImgNum;
    newDiv.id = newDivId;
    var x = "removeFav" + favImgNum;

    function removeFav() {
      const element = document.getElementById(this.id);
      element.remove();
      favImgNum--;
      document.getElementById("favBtn").disabled = false;
      document.getElementById("error").innerHTML = "";
    }
    newDiv.onclick = removeFav;
    var src = document.getElementById("newDivId");
    var id = favImgNum;
    newDiv.appendChild(img);
  }
  else {
    document.getElementById("error").innerHTML = "Maximum favourite image has been reached. <br> Please click on a photo to remove.";
    favImgNum--;
    document.getElementById("favBtn").disabled = true;
  }
}

function removeFav() {
  const element = document.getElementById(this.id);
  element.remove();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
