/*

EVERYTHING IS OKAY
@gulcerevanli

vcds4102 Graduation Project

a short game

#todo
1 -intro screens play button should be placed on the same spot, avoid multiple
mousepress
2 -check papers interaction
3 -fix the puzzle, it should be on a timeline
4 -add more memories
5 -credit the codes I used


last update: May 26, Thu

*/

var room_clean;
var sketchbook;
let blueScreen;
let sketchbook_page;


let timegoes;

let papers = [];
let paper;

var clock;

let currentImage;

let sadSong;

var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;
var scene5 = false;
var scene6 = false;
var scene7 = false;
var scene8 = false;
var scene9 = false;
var scene10 = false;
var scene11 = false;
var scene12 = false;
var scene13 = false;
var scene14 = false;

var x, y, w, h;          // Location and size OF THE PEN
var offsetX, offsetY;

var puzzle;
var photo_memory;
var memoryOfPhoto;
var bacc;
var pinkRect;


function preload() {

  //timegoes = createVideo(['assets/timegoes.mov', 'assets/timegoes.webm']);

  blueScreen = loadImage('assets/blueScreen.png');
  ocr = loadFont('assets/OCRAStd.otf');
  sketchbook = loadImage('assets/sketchbook_1.png');
  room_clean = loadImage('assets/room_clean.png');
  paper = loadImage('assets/trashpaper.png');
  greenpaper = loadImage('assets/greenpaper.png');
  text_box = loadImage ('assets/text_box.png');
  text_box_grey = loadImage ('assets/text_box_grey.png');
  icon = loadImage ('assets/icon.png');
  pencil = loadImage ('assets/pencil.png');
  sketchbook_page = loadImage ('assets/sketchbook_page.png');

  memoryOfPhoto_1 = loadImage ('assets/1.png');
  memoryOfPhoto_2 = loadImage ('assets/2.png');
  memoryOfPhoto_3 = loadImage ('assets/3.png');
  memoryOfPhoto_4 = loadImage ('assets/4.png');
  memoryOfPhoto_5 = loadImage ('assets/5.png');
  memoryOfPhoto_5 = loadImage ('assets/6.png');
  photo_memory = loadImage('assets/memory_of_photo.png');
  bacc = loadImage('assets/light_blue_background.png');
  pinkRect = loadImage ('assets/rectangle_pink.png');

  panicRoom2 = loadImage ('assets/roomMelts_25.png');
  panicRoom3 = loadImage ('assets/roomMelts_26.png');

  //MUSICCC
  soundFormats('mp3','ogg');
  sadSong = loadSound('assets/bitsadinnit.mp3');
  happySong = loadSound('assets/itsokay.mp3');

  clock = loadAnimation ('assets/roomMelts_1.png', 'assets/roomMelts_2.png','assets/roomMelts_3.png', 'assets/roomMelts_4.png', 'assets/roomMelts_5.png', 'assets/roomMelts_6.png','assets/roomMelts_7.png','assets/roomMelts_8.png','assets/roomMelts_9.png','assets/roomMelts_10.png', 'assets/roomMelts_11.png','assets/roomMelts_12.png','assets/roomMelts_13.png','assets/roomMelts_14.png','assets/roomMelts_15.png', 'assets/roomMelts_16.png','assets/roomMelts_17.png','assets/roomMelts_18.png','assets/roomMelts_19.png','assets/roomMelts_20.png','assets/roomMelts_21.png','assets/roomMelts_22.png');
  //sketchbook = loadAnimation ('assets/sketchbook_1.png', 'assets/sketchbook_2.png','assets/sketchbook_3.png', 'assets/sketchbook_4.png', 'assets/sketchbook_5.png',)
  memoryOfPhoto = loadAnimation ('assets/1.png','assets/2.png','assets/3.png','assets/4.png','assets/5.png','assets/6.png');
}

function setup() {
  createCanvas(1200,900);
  textFont(ocr);

  var x0 = 600 - photo_memory.width / 2;
  var y0 = 450 - photo_memory.height / 2;
  puzzle = new Puzzle(x0, y0, photo_memory, 2);

  pixelDensity(1);
  room_clean.loadPixels();
  loadPixels();



 // Starting location OF THE PENCIL
 x = 200;
 y = 700;
 // Dimensions OF THE PENCIL
 w = 75;
 h = 50;

  for (var i = 0; i < 100; i++) {
          papers.push(new Paper(random(250), random(30, 90)));
      }


}

function draw(){

 if (scene1) {
    currentScene1();

    if(mouseIsPressed){
        scene1 = false;
        scene3 = false;
        scene2 = true;
        currentScene2();
      }
}
   if (scene2) {
     currentScene2();
     image(icon,600,850,30,30);
     if (mouseIsPressed && mouseX > 600 && mouseX<630 &&
      mouseY>850 && mouseY <900)  {

         scene1 = false;
         scene2 = false;
         scene3 = true;
         currentScene3();
    }
}
if (scene3 == true) {
   currentScene3();
   image(icon,1000,800,30,30);
   if (mouseIsPressed && mouseX > 1000 && mouseX<1050 &&
    mouseY>800 && mouseY <850) {
       scene2 = false;
       scene3 = false;
       scene4 = true;
       currentScene4();
   }
}
if (scene4 == true) {
 currentScene4();

  for (var i = 0; i < papers.length; i++) {
  papers[i].show();

       scene3 = false;
       scene4 = true;
       }
   }
      if (mouseIsPressed && mouseX > 800 && mouseX<970 &&
        mouseY>370 && mouseY <480) {
          scene4 = false;
          scene5 = true;

   }

if (scene5 == true) {
 currentScene5();
       scene3 = false;
       scene4 = false;
   image(icon,1000,800,30,30);
   if (mouseIsPressed && mouseX > 1000 && mouseX<1050 &&
        mouseY>800 && mouseY <850) {
           scene5 = false;
           scene4 = false;
           scene6 === true;
           currentScene6();
  //  console.log(mouseX,mouseY);

   }
}

if (scene6 == true) {     // CLEAN ROOM
 currentScene6();
       scene5 = false;
       scene4 = false;
       scene6 = true;

if (mouseIsPressed && mouseX > 745 && mouseX<800 &&  //mouse is clicked on photo
    mouseY>90 && mouseY <168) {
      scene6 = false;
      scene4 = false;
      scene7 = true;

   }

if (mouseIsPressed && mouseX > 56 && mouseX<210 &&  //mouse is clicked on clock
       mouseY>30 && mouseY <200) {
         scene6 = false;
         scene4 = false;
         scene7 = false;
         scene8 = true;

      }

}

if (scene7 == true) {     // CLEAN ROOM
    currentScene7();
       scene5 = false;
       scene6 = false;
       scene7 = true;

       if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
        mouseY>750 && mouseY <850) {
               scene7 = false;
               scene5 = false;
               scene6 = true;
               currentScene6();
       }
   }

   if (scene8 == true) {     // time goes animation plays
       currentScene8();
          scene7 = false;
          scene6 = false;
          scene8 = true;
      }


if (scene9 == true) {     // text scene 1
    currentScene9();
       scene8 = false;
       scene7 = false;
       scene9 = true;
   }


if (scene10 == true) {     // text scene 2
    currentScene10();
       scene9 = false;
       scene8 = false;
       scene10 = true;
   }

   if (scene11 == true) {     // text scene 1
       currentScene11();
          scene9 = false;
          scene8 = false;
          scene10 = true;
      }
  if (scene12 == true) {     // dark room
      currentScene12();
         scene11 = false;
         scene10 = false;
         scene12 = true;
         }

   if (scene13 == true) {     // scene after the darkness
       currentScene13();
       scene12 === false;
       scene11 === false;
       scene13 === true;

       if (mouseIsPressed && mouseX > 800 && mouseX<970 &&
         mouseY>370 && mouseY <480) {
               scene13 = false;
               scene12 = false;
               scene14 = true;
               currentScene14();
       }

      }

    if ( scene14 == true) {     // final sketcbook scene
        currentScene14();
        scene13 === false;
        scene12 === false;
        scene14 === true;

     }
}


 function currentScene1() {
   image(blueScreen,0,0);
   textSize(45);
   fill(254, 255, 0);
   text("it's been days since you've", 120, 670);
   text("drawn anything", 120, 730);
   if(mouseIsPressed){
   sadSong.play();}


 }

 function currentScene2() {
   image(blueScreen,0,0);
   textSize(45);
   fill(254, 255, 0);
   text("creativity usually comes", 120, 670);
   text("naturally to you but lately", 120, 730);
   text("you feel lost", 120, 790);
   //console.log(mouseX,mouseY);

 }

 function currentScene3() {
   image(blueScreen,0,0);
   textSize(45);
   fill(254, 255, 0);
   text("what to do?", 120, 730);

 }

 function currentScene4() {      //initial scene after the story

   image(room_clean,0,0);
   image(sketchbook,800,370);

   if ( mouseX > 800 && mouseX<970 &&
     mouseY>370 && mouseY <480) {
       image(text_box,0,0);
       text_box.resize(1200,150);
       textSize(25);
       fill(0);
       text("Your sketchbook, you need a pencil to draw on it ", 110, 95);
     }


   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  }
  else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
     image(pencil,x,y);

///////// sketchbook /////////


 if (mouseIsPressed && x > 800 && x<970 &&
    y>370 && y <480) {
      currentScene5();

   }
 }


function currentScene5() {   //SKETCHBOOK + PENCIL
  image(sketchbook_page, 0,0, 1200,900);
  textSize(25);
  fill(0);
  text("Well, what to draw? Maybe go around ",120, 690);
  text("your room for some inpiration. ",120, 750);
  image(icon,1000,800,30,30);
  if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
   mouseY>750 && mouseY <850) {
     currentScene6();
     scene5 = false;
     scene6 = true;

  }
}
// EXPLORE THE ROOM
function currentScene6() {
  image(room_clean,0,0);
  image(sketchbook,800,370);
console.log(mouseX,mouseY);
// else if
  if (mouseIsPressed && mouseX > 745 && mouseX<800 &&  //mouse is clicked on photo
      mouseY>90 && mouseY <168) {
        currentScene7();
        scene6 = false;
        scene5 = false;

} else if (mouseIsPressed && mouseX > 56 && mouseX<200 &&  //mouse is clicked on clock
    mouseY>30 && mouseY <195) {
      currentScene8();
      scene7 = false;
      scene6 = false;
      scene5 = false;
      scene8 = true;

}

   if(mouseIsPressed && mouseX > 85 && mouseX<425 &&
   mouseY>40 && mouseY <420) {
      image(text_box,0,700);
      textSize(25);
      fill(0);
      text("Some posters of your favourite bands.", 110, 800);
  } else if (mouseIsPressed && mouseX > 500 && mouseX<760 &&
   mouseY>300 && mouseY <430) {
      image(text_box,0,700);
      textSize(25);
      fill(0);
      text("Your laptop. You usually use it to watch videos. ", 110, 800);
}
}

function currentScene7() {

  clear();
  image(bacc,0,0);
  puzzle.draw();

  image(pinkRect,1000,800,60,30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
 mouseY>750 && mouseY <850) {
        scene7 = false;
        scene5 = false;
        scene6 = true;
        currentScene6();
}
}

function currentScene8() { //TIME GOES
  scene7 === false;
  console.log(mouseX,mouseY);
  textSize(25);
  fill(0);
  //  image (timegoes,0,0);

  //TIME GOES ANIMATION

      clock.goToFrame(clock.getLastFrame());
      animation(clock, 600, 450);
      textSize(25);
      fill(0);
      image(text_box_grey,0,700);
      text_box_grey.resize(650,300);
      text("Time goes by so fast and you ",60, 800);
      text("start panicking all of a sudden. ", 60, 850);

      image(icon,1000,800,30,30);
      if (mouseIsPressed && mouseX > 1000 && mouseX<1050 &&
           mouseY>800 && mouseY <850) {
          currentScene9();
}
}

function currentScene9() {   // PANIC_1
    scene8 === false;
  image(panicRoom2, 0,0, 1200,900);
  textSize(25);
  fill(0);
  image(text_box_grey,0,700);
  text_box_grey.resize(650,300);
  text("Everything loses its color and you feel  ",60, 800);
  text("as if you're being swallowed by darkness. ", 60, 850);
  image(icon,1000,800,30,30);
  if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
   mouseY>750 && mouseY <850) {
     currentScene10();
     scene9 = false;
     scene10 = true;

  }
}

function currentScene10() {   // PANIC_2
    scene9 === false;
  image(panicRoom2, 0,0, 1200,900);
  textSize(25);
  fill(0);
  image(text_box_grey,0,700);
  text_box_grey.resize(850,300);
  text("Everything loses its color and you feel  ",60, 800);
  text("as if you're being swallowed by darkness. ", 60, 850);
  image(icon,1000,600,30,30);
  if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
   mouseY>550 && mouseY <750) {
     currentScene11();
     scene10 = false;
     scene11 = true;
  }
}

function currentScene11() {    // PANIC 3
  scene10 === false;
image(panicRoom3, 0,0, 1200,900);
textSize(25);
fill(0);
image(text_box_grey,0,700);
text_box_grey.resize(650,600);
text("... ",60, 700);
text("... ",60, 750);
image(icon,1000,800,30,30);

if (mouseIsPressed && mouseX > 900 && mouseX<1050 &&
 mouseY>750 && mouseY <850) {
   currentScene12();
   scene11 = false;
   scene12 = true;
}
  }

  function currentScene12() {

    scene11 === false;                                                  //lantern + search the room       not'U nasıl renkli yapabilrim
    for (let x = 0; x < room_clean.width; x++) {
    for (let y = 0; y < room_clean.height; y++) {
      // Calculate the 1D location from a 2D grid
      let loc = (x + y * room_clean.width) * 4;
      // Get the R,G,B values from image                                     extract the notes pixels
      let r, g, b;
      r = room_clean.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
  if (mouseIsPressed && mouseX > 825 && mouseX<880 &&
   mouseY>180 && mouseY <230) {
     currentScene13();
     scene12 = false;
     scene13 = true;
   }
}

  function currentScene13() {     // scene after the darkness
        scene12 === false;
        image(room_clean,0,0);
        image(sketchbook,800,370);

        if (mouseIsPressed && mouseX > 800 && mouseX<970 &&
          mouseY>370 && mouseY <480) {
            currentScene14();
            scene13 === false;
            scene14 === true;
   }
}

function currentScene14() {          // sketchbook final scene
      scene13 === false;
      image(sketchbook_page,0,0);
      c = map(mouseX,0,width,0,360)
      strokeWeight(0);
      for (var x = 0;x<width;x = x + 1){
          fill(x/360 * 360, 100, 100);
        	rect(x, height - 30, 30,30)
        	}
  strokeWeight(2);
  if(mouseIsPressed){
  	//stroke(c,75,100)
   line(mouseX,mouseY,pmouseX,pmouseY)
  	}
}

function mousePressed() {                /// dragging the trash + pencil ///

if(scene7 === true) {
  puzzle.mousePressed(mouseX, mouseY);
}

if(scene14 === true) {
  if((mouseX > 0) && (mouseX < width) && (mouseY > height - 30) && (mouseY < height)){
      stroke(c,75,100)
		}
  //happySong.play();
}

   //current_image = current_image + 1;
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }


  for (var i = 0; i < papers.length; i++) {
          //checking to see if the mouse is over the box and turning it white if it is
          if (papers[i].paperover) {
              papers[i].locked = true;
              print("mouse is pressed")
          } else {

              papers[i].locked = false;
              print("mouse isn't pressed")
          }
          papers[i].xoffset = mouseX - papers[i].xpos;
          papers[i].yoffset = mouseY - papers[i].ypos;
          papers[i].xoffset = mouseX - papers[i].xpos2;
          papers[i].yoffset = mouseY - papers[i].ypos2
          print(papers[i].locked);
      }
      return false;
}

function mouseDragged () {

  if(scene7 === true) {
    puzzle.mouseDragged(mouseX, mouseY);
  }


  for (var i = 0; i < papers.length; i++) {
          if (papers[i].locked) {
              papers[i].xpos = mouseX - papers[i].xoffset;
              papers[i].ypos = mouseY - papers[i].yoffset;
              papers[i].xpos2 = mouseX - papers[i].xoffset;
              papers[i].ypos2 = mouseY - papers[i].yoffset;
          }
    }
}

function mouseReleased() {

  if(scene7 === true) {
    puzzle.mouseReleased();
  }

  // Quit dragging
  for (var i = 0; i < papers.length; i++) {
        papers[i].locked = false;
    }
    dragging = false;
}

function Paper(tempColor, tempSize) {
    this.c = tempColor //tint(random(0,255));
    this.xpos = random(width);
    this.ypos = random(600,900);
    this.xpos2 = random(width);
    this.ypos2 = random(700,900);
    this.papersize = 60; //random(60,100);
    this.paperover = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;

    this.show = function() {

        if (mouseX > this.xpos - this.papersize && mouseX < this.xpos + this.papersize &&
            mouseY > this.ypos - this.papersize && mouseY < this.ypos + this.papersize ||
            mouseX > this.xpos2 - this.papersize && mouseX < this.xpos2 + this.papersize &&
            mouseY > this.ypos2 - this.papersize && mouseY < this.ypos2 + this.papersize) {
            this.paperover = true;
            fill(255);

            if (mouseIsPressed && this.paperover == true) {
                stroke(200, 79, 100);
                strokeWeight(5);
            } else {
                noStroke();
            }

        } else {
            this.paperover = false;
            noStroke();
            fill(this.c);
        }
        image (greenpaper,this.xpos2, this.ypos2, this.papersize, this.papersize);
        image (paper,this.xpos, this.ypos, this.papersize, this.papersize);

    };
}

var Piece = (function() {
    function Piece(pos, img, i) {
        this.pos = pos;
        this.img = img;
        this.i = i;
        this.width = img.width;
        this.height = img.height;
    }

  Piece.prototype.draw = function() {
        image(this.img, this.pos.x, this.pos.y);
    };
   //Set the result of  hit
  Piece.prototype.hits = function(hitpos) {
        if (hitpos.x > this.pos.x &&
            hitpos.x < this.pos.x + this.width &&
            hitpos.y > this.pos.y &&
            hitpos.y < this.pos.y + this.height) {
            return true;
        }
        return false;
    };
    return Piece;
}());

var Puzzle = (function() {
    function Puzzle(x, y, img, side) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.side = side;
        this.isDragging = false;
        this.canPlay = true;
        this.pieces = [];
        this.width = img.width;
        this.height = img.height;
        this.w = this.width / side;
        this.h = this.height / side;
        this.placePieces();
    }

  Puzzle.prototype.placePieces = function() {
        for (var y = 0; y < this.side; y++) {
            for (var x = 0; x < this.side; x++) {
                var img = createImage(this.w, this.h);
                img.copy(this.img, this.w * x, this.h * y, this.w, this.h, 0, 0, this.w, this.h);
                var pos = this.randomPos(this.w, this.h);
                var index = x + y * this.side;
                this.pieces.push(new Piece(pos, img, index));
            }
        }
    };
  // random place of pieces
    Puzzle.prototype.randomPos = function(marginRight, marginBottom) {
        return createVector(random(0, 1200 - marginRight), random(0, 900 - marginBottom));
    };
    Puzzle.prototype.draw = function() {
        noFill();
        rect(this.x - 1, this.y - 1, this.width + 1, this.height + 1);

        this.pieces.forEach(function(r) {
            return r.draw();
        });
    };
    Puzzle.prototype.mousePressed = function(x, y) {
        var _this = this;
        if (this.canPlay) {
            var m_1 = createVector(x, y);
            var index_1;
            this.pieces.forEach(function(p, i) {
                if (p.hits(m_1)) {
                    _this.clickOffset = p5.Vector.sub(p.pos, m_1);
                    _this.isDragging = true;
                    _this.dragPiece = p;
                    index_1 = i;
                }
            });
            if (this.isDragging) {
                this.putOnTop(index_1);
            }
        }
    };
    Puzzle.prototype.mouseDragged = function(x, y) {
        if (this.isDragging) {
            var m = createVector(x, y);
            this.dragPiece.pos.set(m).add(this.clickOffset);
        }
    };
    Puzzle.prototype.mouseReleased = function() {
        if (this.isDragging) {
            this.isDragging = false;
            this.snapTo(this.dragPiece);
            this.checkEndGame();
        }
    };
    Puzzle.prototype.putOnTop = function(index) {
        this.pieces.splice(index, 1);
        this.pieces.push(this.dragPiece);
    };
    Puzzle.prototype.snapTo = function(p) {
        var dx = this.w / 2;
        var dy = this.h / 2;
        var x2 = this.x + this.width;
        var y2 = this.y + this.height;
        for (var y = this.y; y < y2; y += this.h) {
            for (var x = this.x; x < x2; x += this.w) {
                if (this.shouldSnapToX(p, x, dx, dy, y2)) {
                    p.pos.x = x;
                }
                if (this.shouldSnapToY(p, y, dx, dy, x2)) {
                    p.pos.y = y;
                }
            }
        }
    };
    Puzzle.prototype.shouldSnapToX = function(p, x, dx, dy, y2) {
        return this.isOnGrid(p.pos.x, x, dx) && this.isInsideFrame(p.pos.y, this.y, y2 - this.h, dy);
    };
    Puzzle.prototype.shouldSnapToY = function(p, y, dx, dy, x2) {
        return this.isOnGrid(p.pos.y, y, dy) && this.isInsideFrame(p.pos.x, this.x, x2 - this.w, dx);
    };
    Puzzle.prototype.isOnGrid = function(actualPos, gridPos, d) {
        return actualPos > gridPos - d && actualPos < gridPos + d;
    };
    Puzzle.prototype.isInsideFrame = function(actualPos, frameStart, frameEnd, d) {
        return actualPos > frameStart - d && actualPos < frameEnd + d;
    };
  // to check and show the number of right place
    Puzzle.prototype.checkEndGame = function() {
        var _this = this;
        var nrCorrectNeeded = this.side * this.side;
        var nrCorrect = 0;
        this.pieces.forEach(function(p) {
            var correctIndex = p.i;
            var actualIndex = (p.pos.x - _this.x) / _this.w + (p.pos.y - _this.y) / _this.h * _this.side;
            if (actualIndex === correctIndex) {
                nrCorrect += 1;
            }
        });
        //when you complete the puzzle,it show well done,and when you put the piece in the correct place it show right place in the ensole
			if (nrCorrect === nrCorrectNeeded) {
            var h1 = createElement("h1", "Well Done!");
            this.canPlay = false;
        } else {

          console.log("Right places: " + nrCorrect);
        }
    };
    return Puzzle;
}());
