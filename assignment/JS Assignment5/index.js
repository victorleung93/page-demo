// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = document.getElementById('area').clientWidth;
canvas.height = document.getElementById('area').clientHeight;

function update() {
	canvas.width = document.getElementById('area').clientWidth;
	canvas.height = document.getElementById('area').clientHeight;
}

document.getElementById('area').appendChild(canvas);

// Game objects
var caught = 0;
var score = 0;
var time = 5000;
var interval = setInterval(function() {render()}, time);

function setSpeed() {
	switch (caught) {
		case 0:
			time = 5000;
			break;
		case 1:
		case 2:
		case 3:
			time = 4000;
			break;
		case 4:
		case 5:
		case 6:
			time = 3000;
			break;
		case 7:
		case 8:
		case 9:
			time = 2000;
			break;
		case 10:
		case 11:
		case 12:
			time = 1500;
			break;
		case 13:
		case 14:
		case 15:
			time = 1000;
			break;
		case 16:
		case 17:
		case 18:
			time = 750;
			break;
		default:
			time = 500;
	}
}

function settingInterval() {
	interval = setInterval(function() {render()}, time);
}

function resetInterval() {
	clearInterval(interval);
}
function levelControl() {
	setSpeed();
	resetInterval();
	settingInterval();
}

var monster = {
	x1: 0,
	y1: 0,
  x2: 0,
  y2: 0
};

//Game control

document.getElementById("area").addEventListener("click", printMousePos);
function printMousePos(event) {
  if (event.offsetX >= monster.x1 && event.offsetX <= monster.x2){
    if (event.offsetY >= monster.y1 && event.offsetY <= monster.y2){
			caught += 1;
			score += 1;
			levelControl();
			update();
			render();
    }
  }
  document.getElementById("score").innerHTML = score;
}

//setup Game

function reset() {
  var randomx = Math.random();
  var randomy = Math.random();

  monster.x1 = 0 + (randomx * (canvas.width - 64));
  monster.x2 = monster.x1 + 64;

	monster.y1 = 0 + (randomy * (canvas.height - 64));
  monster.y2 = monster.y1 + 64;
}

function render(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	reset();
	if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x1, monster.y1, 64, 64);
  }
}

var monsterReady = false;
var monsterImage = new Image();
monsterImage.src = "image/head.png";
monsterImage.onload = function () {
  // show the monster image
  monsterReady = true;
	render();
};

//show up interval

function resetspeed() {
	caught = 0;
	levelControl();
}

function resetscore(){
	caught = 0;
	score = 0;
	time = 5000;
	resetInterval()
	document.getElementById("score").innerHTML = score;
	update();
	render();
}

//testing msg in console
