/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Ching yiu Leung
 *    Date:   10/06/2022

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var zoomImg;
var fav;
/* populate img element and create event listener */

function pageSetup() {
   var zoom = localStorage.getItem("zoomImg");
   if (zoom == 0) {
     zoom = 5;
   }
   else if (zoom >= 6) {
     zoom = zoom - 5;
   }
   var figFilename = "images/IMG_0" + zoom + ".jpg";
   var filename = "images/IMG_0" +  zoom + "sm.jpg";
   fav = filename;
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener("click", closeWin);
}

function closeWin() {
  window.close();
}

function createEventListener() {
  var closeWindowDiv = document.getElementsByTagName("p")[0];
  if (closeWindowDiv.addEventListener) {
    closeWindowDiv.addEventListener("click", closeWin,false);
  } else if (closeWindowDiv.attachEvent) {
    closeWindowDiv.attachEvent("onclick", closeWin);
  }
  var addToFav = document.getElementById("add");
  if (addToFav.addEventListener){
    addToFav.addEventListener("click", addFav, false);
  } else if (addToFav.attachEvent) {
    addToFav.attachEvent("onclick", addFav);
  }
}

function addFav() {
  localStorage.setItem("storageFav",fav);
  document.getElementById("add").innerHTML = " added to favourite";
  window.close();
}
/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
