var __maxNum = 300;
var datas;
var star = [];
var file;
var searcher;
var __wid = 50;
var __hei = 50;
var __rad = 10;
var __criterion = 20;
var expressionMode = false;
//var __show_criterion = 40;
var __search_check = true;
var __search_finished = false;
var __saveIndex = 0;
var __mapIndex = 0;

let button, input, explain;
let label;
let autoDoing;
let canvas;

// function preload() {
//   file = loadTable('openSet.csv', 'csv', 'header');
// }


function originalRandom() {
	console.log("original random");
	__mapIndex++;
    __search_check = true;
    for (let n = 0; n < __maxNum; n++) {
      let i = random(0, __wid);
      let j = random(0, __hei);
      star[n] = new Star(i, j);
    }
}

function floorRandom() {
	console.log("floor() random");
	__mapIndex++;
    __search_check = true;
    for (let n = 0; n < __maxNum; n++) {
      let i = floor(random(0, __wid));
      let j = floor(random(0, __hei));
      star[n] = new Star(i, j);
    }
}

function keyTyped() {
  if (key == 'a') {
    originalRandom();
  }
  if (key == 'b') {
    floorRandom();
  }
  if (key == 'c') {
    if(__search_check) {
      searcher.searching();
      __search_check = false;
    }
    else {
      console.log("You already searching!")
    }
  }
  if (key == 'd') {
    expressionMode = !expressionMode;
    console.log(expressionMode);
  }

  if(key == 'p') {
	__saveIndex++;
    save(label);
    console.log("saved + " + label);
  }
}

function set_star() {

}

function setup() {
label = __saveIndex + "wid" + __wid + "hei" + __hei + "starNum" + __maxNum + "r" + __rad + "cri" + __criterion  + " ? " + __mapIndex;
  canvas = createCanvas(__wid, __hei).position(0, 50);
  
  input = createInput();
  input.position(20, 20);

  button = createButton('criterion');
  button.position(input.x + input.width, 20);
  button.mousePressed( () => {__criterion = input.value()} );
  button = createButton('criterion += 5');
  button.position(input.x + input.width, 42);
  button.mousePressed( () => {__criterion = int(__criterion) + 5} );

  explain = createElement('div', label);
  explain.position(20, 0);

  textAlign(CENTER);
  textSize(40);
  
  searcher = new Searcher(__rad, __criterion);
  for (let n = 0; n < __maxNum; n++) {
    // let i = file.getNum(n, 0);
    // let j = file.getNum(n, 1);
    let i = random(0, __wid);
    let j = random(0, __hei);
    star[n] = new Star(i, j);

  }
}

function draw() {
label = __saveIndex + "wid" + __wid + "hei" + __hei + "starNum" + __maxNum + "r" + __rad + "cri" + __criterion  + " ? " + __mapIndex;
	explain.html(label);
  background(255);
  fill(255);
  for (let i = 0; i < star.length; i++) {
    star[i].show();
  }
  if(expressionMode) {
    for(let i of searcher.memory) {
        if(i.count > __criterion) {
			i.show();
      }
    } 
  }
}


function Star(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 0.3, 0.3);
  }
}

function Searcher(r, c) {
  this.memory = [];
  this.subMemory = [];
  this.r = r;
  this.criterion = c;
  this.x = __wid / 2;
  this.y = __hei / 2;

  this.searching = function() {
    let index = 0;
    for (let i = 0; i < __wid; i++) {
      for (let j = 0; j < __hei; j++) {
        let count = 0;
        this.x = i;
        this.y = j;
        //원 반경안에 있는 spot 수 세기.
        for (let n = 0; n < star.length; n++) {
          if (dist(this.x, this.y, star[n].x, star[n].y) < r) count++;
        }
        console.log("x : " + this.x + " y : " + this.y + " count : " + count);
        this.memory[index++] = new Circle(this.x, this.y, this.r, count);
      }
    }
	console.log("Searching DONE!");
    console.log("starNum : " + __maxNum + " r : " + __rad + " cri : " + __criterion)
	__search_finished = true;
  }
}

function Circle(x, y, r, count) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.count = count;

  this.show = function () {
    noStroke();
    fill(255, 204, 0, 10);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

function drawingGraph(memory, x, y) {
  let maxCountNum;
  let maxMemorySum;


  push();
  translate(x, y);

  pop();
}
