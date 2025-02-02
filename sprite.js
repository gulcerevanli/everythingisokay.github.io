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

 credits:
 Thanks to Ceren Kayalar for all the help !!

   Puzzle: by Suki https://www.openprocessing.org/sketch/724032
   Draaging the papers: by nlogler ---> https://forum.processing.org/two/discussion/19190/click-and-drag-with-arrays-of-objects
   Dark Room : Brightness Example by Daniel Shiffman ---> https://p5js.org/examples/color-brightness.html

last update: Jun 10, Wed

computer says YES
*/

let drawing = [];

var room_clean;
var sketchbook;
let blueScreen;
let sketchbook_page;
var room_panic_mode;
var noteSavesU;
var room_hints;

let timegoes;
let timer = 20;
let lockingCounter = 0;

let papers = [];
let paper;

var clock;
var sketchbook_Opens;

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
var sceneBook = false;
var scenePlant = false;
var sceneSmiley = false;
var sceneDrawing = false;
var bacgroundd = false;
var noteScene = false;
var aniscene = false;

var x, y; // Location and size OF THE PEN
//var offsetX, offsetY;

var puzzle;
var puzzle1;
var puzzle2;
var puzzle3;
var puzzle4;


var photo_memory;
var memoryOfPhoto;
var memoryOfBook;
var memoryOfDrawing;
var memoryOfPlant;
var memoryOfSmiley;

var timeShow;
var purpleTime;
//var completed;
//var checkPuzzle;
var imgCheckedBox;
var imgUncheckedBox;

var bacc;
var pinkRect;

var pencill;
var pencil;
var pencilUcu;

var sketchbook_Area;
var draggedSprite;
var sari;

function preload() {
  x = 200;
  y = 760;
  pencill =createSprite(x,y,150,70);
  pencill.addImage(loadImage('assets/pencil.png'));
  //pencill.mouseActive = true;
  pencill.setCollider ('rectangle',55,33,100,65 );

  pencill.onMousePressed = function() {
     if (draggedSprite == null) {
       draggedSprite = this;
     }
   };

   pencill.onMouseReleased = function() {
     if (draggedSprite == this) {
       draggedSprite = null;
     }
   };

  sketchbook_Area =createSprite(870,450,130,155);
  sketchbook_Area.addImage(loadImage('assets/sketchbook_Area.png'));

  //timegoes = createVideo(['assets/timegoes.mov', 'assets/timegoes.webm']);

  blueScreen = loadImage('assets/blueScreen.png');
  ocr = loadFont('assets/OCRAStd.otf');
  sketchbook = loadImage('assets/sketchBook.png');
  room_clean = loadImage('assets/room_clean.png');
  paper = loadImage('assets/trashpaper.png');
  greenpaper = loadImage('assets/greenpaper.png');
  text_box = loadImage('assets/text_box.png');
  text_box_grey = loadImage('assets/text_box_grey.png');
  icon = loadImage('assets/icon.png');
  sketchbook_page = loadImage('assets/sketchbook_page.png');
  room_hints = loadImage('assets/room_hints.png');
  timeShow = loadImage('assets/time_ui.png');
  imgCheckedBox = loadImage('assets/checkedBox.png');
  imgUncheckedBox = loadImage('assets/uncheckedBox.png');

  purpleTime = loadImage('assets/purple.png');

  memoryOfPhoto_1 = loadImage('assets/1.png');
  memoryOfPhoto_2 = loadImage('assets/2.png');
  memoryOfPhoto_3 = loadImage('assets/3.png');
  memoryOfPhoto_4 = loadImage('assets/4.png');
  memoryOfPhoto_5 = loadImage('assets/5.png');
  memoryOfPhoto_5 = loadImage('assets/6.png');
  photo_memory = loadImage('assets/memory_of_photo.png');
  memoryOfDrawing = loadImage('assets/memory_of_drawing.png');
  memoryOfPlant = loadImage('assets/memory_of_plant.png');
  memoryOfSmiley = loadImage('assets/memory_of_smiley.png');

//  pencil = loadImage
  bacc = loadImage('assets/light_blue_background.png');
  pinkRect = loadImage('assets/rectangle_pink.png');
  pencilUcu = loadImage('assets/pen_ucu.png');
  memoryOfBook = loadImage('assets/memory_of_book.png');

  panicRoom2 = loadImage('assets/roomMelts_25.png');
  panicRoom3 = loadImage('assets/roomMelts_26.png');
  room_panic_mode = loadImage('assets/room_panic_mode.png');
  noteSavesU = loadImage('assets/noten.png');
  noteIsFound = loadImage('assets/noteRead.png');
  //MUSICCC
  soundFormats('mp3', 'ogg');
  sadSong = loadSound('assets/bitsadinnit.mp3');
  happySong = loadSound('assets/itsokay.mp3');

  sari = loadImage('assets/Artboard 1.png')

  clock = loadAnimation('assets/roomMelts_1.png', 'assets/roomMelts_2.png', 'assets/roomMelts_3.png', 'assets/roomMelts_4.png', 'assets/roomMelts_5.png', 'assets/roomMelts_6.png', 'assets/roomMelts_7.png', 'assets/roomMelts_8.png', 'assets/roomMelts_9.png', 'assets/roomMelts_10.png', 'assets/roomMelts_11.png', 'assets/roomMelts_12.png', 'assets/roomMelts_13.png', 'assets/roomMelts_14.png', 'assets/roomMelts_15.png', 'assets/roomMelts_16.png', 'assets/roomMelts_17.png', 'assets/roomMelts_18.png', 'assets/roomMelts_19.png', 'assets/roomMelts_20.png', 'assets/roomMelts_21.png', 'assets/roomMelts_22.png');
  //sketchbook = loadAnimation ('assets/sketchbook_1.png', 'assets/sketchbook_2.png','assets/sketchbook_3.png', 'assets/sketchbook_4.png', 'assets/sketchbook_5.png',)
  memoryOfPhoto = loadAnimation('assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/4.png', 'assets/5.png', 'assets/6.png');
  sketchbook_Opens = loadAnimation ('assets/plswork_1.png', 'assets/plswork_2.png','assets/plswork_3.png', 'assets/plswork_4.png', 'assets/plswork_5.png','assets/plswork_6.png', 'assets/plswork_7.png','assets/plswork_8.png', 'assets/plswork_9.png', 'assets/plswork_10.png');
}

function setup() {

  let c = createCanvas(1200,900);
  image (sari,0,0);
//  background(222, 255, 35);
  textFont(ocr);

  imgCheckedBox.resize(50, 50);
  imgUncheckedBox.resize(50, 50);
  //purpleTime.resize(100, 60);

  var x0 = 600 - photo_memory.width / 2;
  var y0 = 450 - photo_memory.height / 2;
  puzzle = new Puzzle(x0, y0, photo_memory, 2);

  var x1 = 600 - memoryOfBook.width / 2;
  var y1 = 450 - memoryOfBook.height / 2;
  puzzle1 = new Puzzle(x1, y1, memoryOfBook, 2);

  var x2 = 600 - memoryOfDrawing.width / 2;
  var y2 = 450 - memoryOfDrawing.height / 2;
  puzzle2 = new Puzzle(x2, y2, memoryOfDrawing, 2);

  var x3 = 600 - memoryOfPlant.width / 2;
  var y3 = 450 - memoryOfPlant.height / 2;
  puzzle3 = new Puzzle(x3, y3, memoryOfPlant, 2);

  var x4 = 600 - memoryOfSmiley.width / 2;
  var y4 = 450 - memoryOfSmiley.height / 2;
  puzzle4 = new Puzzle(x4, y4, memoryOfSmiley, 2);

  pixelDensity(1);
  room_panic_mode.loadPixels();
  loadPixels();

  // Starting location OF THE PENCIL

  // Dimensions OF THE PENCIL
 //w = 75;
 //h = 50;

  for (var i = 0; i < 100; i++) {
    papers.push(new Paper(random(250), random(30, 90)));
  }

}

function draw() {

  if (scene1) {
    currentScene1();

    if (mouseIsPressed) {
      scene1 = false;
      scene3 = false;
      scene2 = true;
      currentScene2();
    }
  }
  if (scene2) {
    currentScene2();
    scene1 = false;
    scene3 = false;
    image(icon, 600, 850, 30, 30);
    if (mouseIsPressed && mouseX > 600 && mouseX < 630 &&
      mouseY > 850 && mouseY < 900) {

      scene1 = false;
      scene2 = false;
      scene3 = true;
      currentScene3();
    }
  }
  if (scene3) {
    currentScene3();
    scene1 = false;
    scene2 = false;
    scene3 = true;
    image(icon, 1000, 800, 30, 30);
    if (mouseIsPressed && mouseX > 1000 && mouseX < 1050 &&
      mouseY > 800 && mouseY < 850) {
      scene2 = false;
      scene3 = false;
      scene4 = true;
      currentScene4();
    }
  }
  if (scene4) {
    currentScene4();
    scene1 = false;
    scene2 = false;
    scene3 = false;
    ///console.log(mouseX, mouseY);
    if (draggedSprite != null) {
      draggedSprite.position.x = mouseX;
      draggedSprite.position.y = mouseY;
    }

    for (var i = 0; i < papers.length; i++) {
      papers[i].show();

    }
 }

  if (scene5) {
    currentScene5();
    scene3 = false;
    scene4 = false;

    if (mouseIsPressed && mouseX > 1000 && mouseX < 1050 &&
        mouseY > 800 && mouseY < 850) {
          scene5 = false;
          scene4 = false;
          scene6 = true;
          currentScene6();

      ///  console.log(mouseX,mouseY);
    }
  }

  if (scene6) { // CLEAN ROOM
    currentScene6();
    scene5 = false;
    scene4 = false;
    scene7 = false;

    if (timer < 1) { // THERES NO FEEDBACK?
      scene8 = true;
      scene6 = false;
      currentScene8();
    } else if (lockingCounter > 4) { // THERES NO FEEDBACK?
      scene13 = true;
      scene6 = false;
      currentScene13();
    } else if (mouseIsPressed && mouseX > 745 && mouseX < 800 && //mouse is clicked on photo
      mouseY > 90 && mouseY < 168) {
      scene6 = false;
      scene4 = false;
      scene7 = true;

    } else if (mouseIsPressed && mouseX > 200 && mouseX < 350 && //mouse is clicked on book
      mouseY > 740 && mouseY < 780) {
      scene6 = false;
      scene4 = false;
      sceneBook = true;

    } else if (mouseIsPressed && mouseX > 877 && mouseX < 925 && //mouse is clicked on smiley
      mouseY > 130 && mouseY < 170) {
      scene6 = false;
      scene4 = false;
      sceneSmiley = true;
    } else if (mouseIsPressed && mouseX > 1000 && mouseX < 1150 && //mouse is clicked on plant
      mouseY > 275 && mouseY < 680) {
      scene6 = false;
      scene4 = false;
      scenePlant = true;
    } else if (mouseIsPressed && mouseX > 780 && mouseX < 855 && //mouse is clicked on drawing
      mouseY > 250 && mouseY < 370) {
      scene6 = false;
      scene4 = false;
      sceneDrawing = true;
    }


  } // end of if (scene6)

  if (sceneBook) { //
    bookMemory();
    scene7 = false;
    scene6 = false;
    if (!puzzle1.canPlay) {
      fill(0, 0, 0);
      text("WELL DONE!", 10, height - 50);
      noFill();
    }

    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) {
      sceneBook = false;
      scene5 = false;
      scene6 = true;
      currentScene6();
    }
  }

  if (scenePlant) { //
    plantMemory();
    scene7 = false;
    scene6 = false;
    if (!puzzle3.canPlay) {
      fill(0, 0, 0);
      text("WELL DONE!", 10, height - 50);
      noFill();
    }

    if (mouseIsPressed && mouseX > 1000 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) {
      scenePlant = false;
      scene5 = false;
      scene6 = true;
      currentScene6();
    }
  }

  if (sceneSmiley) { //
    smileyMemory();
    scene7 = false;
    scene6 = false;
    if (!puzzle4.canPlay) {
      fill(0, 0, 0);
      text("WELL DONE!", 10, height - 50);
      noFill();
    }

    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) {
      sceneSmiley = false;
      scene5 = false;
      scene6 = true;
      currentScene6();
    }
  }

  if (sceneDrawing) { //
    drawingMemory();
    scene7 = false;
    scene6 = false;
    if (!puzzle2.canPlay) {
      fill(0, 0, 0);
      text("WELL DONE!", 10, height - 50);
      noFill();
    }
    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) { // Check if Go Back is pressed
      sceneDrawing = false;
      scene5 = false;
      scene6 = true;
      currentScene6();
    }
  }

  if (scene7) { // CLEAN ROOM
    currentScene7();
    scene5 = false;
    scene6 = false;
    if (!puzzle.canPlay) {
      fill(0, 0, 0);
      text("WELL DONE!", 10, height - 50);
      noFill();
    }
    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) {
      scene7 = false;
      scene5 = false;
      scene6 = true;
      currentScene6();
    }
  }

  if (scene8) { // time goes animation plays
    currentScene8();
    scene7 = false;
    scene6 = false;
  }


  if (scene9) { // text scene 1
    currentScene9();
    scene8 = false;
    scene7 = false;
  }


  if (scene10) { // text scene 2
    currentScene10();
    scene9 = false;
    scene8 = false;
    scene10 = true;
  }

  if (scene11) { // text scene 1
    currentScene11();
    scene9 = false;
    scene8 = false;
    scene10 = true;
  }

  if (scene12) { // dark room
    currentScene12();
    scene11 = false;
    scene10 = false;
    scene12 = true;

    if (mouseIsPressed && mouseX > 825 && mouseX < 880 &&
      mouseY > 180 && mouseY < 230) {
      scene12 = false;
      scene13 = false;
      noteScene = true;
      note();
      }
    }


  if (noteScene) {
    note();
    scene13 = false;
    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 550 && mouseY < 750) {
      noteScene = false;
      scene13 = true;
    }
  }

  if (scene13) { // scene after the darkness
    currentScene13();
    scene12 = false;
    scene11 = false;
    scene13 = true;

}
if (aniscene) { // scene after the darkness
  sketchAnimation();
  scene12 = false;
  scene11 = false;
  scene13 = false;
  aniscene = true;

  if (mouseIsPressed && mouseX > 100 && mouseX < 130 &&
    mouseY > 550 && mouseY < 750) {
      currentScene14();
      aniscene = false;
      scene13 = false;
      scene14 = true;

}
}

  if (scene14) {
    //  bacgrounddd();
    // final sketcbook scene
    background(sketchbook_page, 0, 0);
    currentScene14();
    scene13 = false;
    scene12 = false;
    //scene14 = false;


  }
}

function currentScene1() {
  console.log("currentScene1");
  image(blueScreen, 0, 0);
  textSize(45);
  fill(254, 255, 0);
  text("it's been days since you've", 120, 670);
  text("drawn anything", 120, 730);
  if (mouseIsPressed) {
    sadSong.play();
  }


}

function currentScene2() {
  scene1 = false;
  console.log("currentScene2");
  image(blueScreen, 0, 0);
  textSize(45);
  fill(254, 255, 0);
  text("creativity usually comes", 120, 670);
  text("naturally to you but lately", 120, 730);
  text("you feel lost", 120, 790);
  //scribble.scribbleLine( mouseX, mouseY);
  ///console.log(mouseX,mouseY);

}

function currentScene3() {
  scene1 = false;
  scene2 = false;
  scene3 = true;
  image(blueScreen, 0, 0);
  textSize(45);
  fill(254, 255, 0);
  text("what to do?", 120, 730);


}

function currentScene4() { //initial scene after the story
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = true;
  image(room_clean, 0, 0);
  image(sketchbook, 800, 370);
  console.log("currentScene4");

  image(text_box, 0, -10);
  text_box.resize(780, 70);
  textSize(17);
  fill(0);
  text("To use your sketchbook, you need a pencil to draw on it. ", 50, 35);

  //  pencill.position.x = mouseX;
    //pencill.position.y = mouseY;

  if(pencill.overlap(sketchbook_Area)) {
    currentScene5();
    scene4 = false;
    scene5 = true;
  }



//  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
  //  rollover = true;
//  } else {
//    rollover = false;
//  }

  // Adjust location if being dragged
  //if (dragging) {
  //  x = mouseX + offsetX;
  //  y = mouseY + offsetY;
//  }


     drawSprites();

//  image(pencil, x, y);

  ///////// sketchbook /////////


//  if (mouseIsPressed && x > 800 && x < 970 &&
  //  y > 370 && y < 480) {
  //  currentScene5();

//  }
}


function currentScene5() { //SKETCHBOOK + PENCIL
  console.log("currentScene5");
  image(sketchbook_page, 0, 0, 1200, 900);
  textSize(25);
  fill(0);
  text("Well, what to draw? Maybe go around ", 120, 690);
  text("your room for some inspiration. ", 120, 750);
  image(icon, 1000, 700, 30, 30);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 650 && mouseY < 750) {
      //currentScene6();
      scene5 = false;
      scene6 = true;

  }
}
// EXPLORE THE ROOM
function currentScene6() {

  console.log("currentScene6");

  image(room_hints, 0, 0);
  image(sketchbook, 800, 370);
  image(text_box, 0, 830);
  text_box.resize(750, 70);
  textSize(17);
  fill(0);


  //text("To get inspired, explore the room. ", 50, 35);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer < 20) {
    // Form()
    let t = map(timer, 0, 200, 0, 600);
    fill(255, 50, 50);
    image(purpleTime, 68, 850, t*2 - 30, 40)
    image(timeShow, 60, 840);
    timeShow.resize(105, 60);


  }

  if (puzzle.canPlay) {
    image(imgUncheckedBox, 200, 845);
  } else {
    image(imgCheckedBox, 200, 845);
  }

  if (puzzle1.canPlay) {
    image(imgUncheckedBox, 260, 845);
  } else {
    image(imgCheckedBox, 260, 845);
  }

  if (puzzle2.canPlay) {
    image(imgUncheckedBox, 320, 845);
  } else {
    image(imgCheckedBox, 320, 845);
  }
  if (puzzle3.canPlay) {
    image(imgUncheckedBox, 380, 845);
  } else {
    image(imgCheckedBox, 380, 845);
  }

  if (puzzle4.canPlay) {
    image(imgUncheckedBox, 440, 845);
  } else {
    image(imgCheckedBox, 440, 845);
  }

  if (timer <= 0) {
    // Form()
    scene6 = false;
    currentScene8();

  }

  if (lockingCounter === 5) { // puzzlES ARE COMPLETED
    scene13 = false;
    scene6 = false;
    noteScene = true;
    note();
  }

  // else if
  if (mouseIsPressed && mouseX > 745 && mouseX < 800 && //mouse is clicked on photo
    mouseY > 90 && mouseY < 168) {
    currentScene7();
    scene6 = false;
    scene5 = false;

//  } else if (mouseIsPressed && mouseX > 56 && mouseX < 200 && //mouse is clicked on clock
  //  mouseY > 30 && mouseY < 195) {
  //  currentScene8();
  //  scene7 = false;
  //  scene6 = false;
  //  scene5 = false;
  //  scene8 = true;

  } else if (mouseIsPressed && mouseX > 200 && mouseX < 350 && //mouse is clicked on book
    mouseY > 740 && mouseY < 780) {
    bookMemory();
    scene7 = false;
    scene6 = false;
    scene5 = false;

  }

  if (mouseIsPressed && mouseX > 85 && mouseX < 425 &&
    mouseY > 40 && mouseY < 420) {
    image(text_box, 0, 800);
    textSize(17);
    fill(0);
    text("Some posters of your favourite bands.", 50, 845);
  } else if (mouseIsPressed && mouseX > 500 && mouseX < 760 &&
    mouseY > 300 && mouseY < 430) {
    image(text_box, 0, 800);
    textSize(17);
    fill(0);
    text("Your laptop. You usually use it to watch videos. ", 50, 845);
  }

}

function currentScene7() {
  console.log("currentScene7");

  clear();
  image(bacc, 0, 0);
  puzzle.draw();

  image(pinkRect, 989, 800, 80, 30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    scene7 = false;
    scene5 = false;
    scene6 = true;
    currentScene6();
  }
}

function bookMemory() {

  clear();
  image(bacc, 0, 0);
  puzzle1.draw();

  image(pinkRect, 989, 800, 80, 30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    scene7 = false;
    scene5 = false;
    scene6 = true;
    currentScene6();
  }
}

function smileyMemory() {

  clear();
  image(bacc, 0, 0);
  puzzle4.draw();

  image(pinkRect, 989, 800, 80, 30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    scene7 = false;
    scene5 = false;
    scene6 = true;
    currentScene6();
  }
}

function drawingMemory() {

  clear();
  image(bacc, 0, 0);
  puzzle2.draw();

  image(pinkRect, 989, 800, 80, 30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    scene7 = false;
    scene5 = false;
    scene6 = true;
    currentScene6();
  }
}

function plantMemory() {

  clear();
  image(bacc, 0, 0);
  puzzle3.draw();
console.log(mouseX,mouseY);
  image(pinkRect, 989, 800, 80, 30);
  textSize(12);
  fill(0);
  text("Go Back ", 1000, 820);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    scene7 = false;
    scene5 = false;
    scene6 = true;
    currentScene6();
  }
}

function currentScene8() { //TIME GOES
  scene7 = false;
  console.log("currentScene8");
  //  textSize(25);
  //  fill(0);
  //  image (timegoes,0,0);

  //TIME GOES ANIMATION

  clock.goToFrame(clock.getLastFrame());
  animation(clock, 600, 450);
  textSize(25);
  //fill(0);
  image(text_box_grey, 0, 700);
  text_box_grey.resize(680, 300);
  text("Time goes by so fast and you ", 60, 800);
  text("start panicking all of a sudden. ", 60, 850);

  image(icon, 1000, 800, 30, 30);
  if (mouseIsPressed && mouseX > 1000 && mouseX < 1050 &&
    mouseY > 800 && mouseY < 850) {
    currentScene9();
  }
}

function currentScene9() { // PANIC_1
  console.log("currentScene9");
  scene8 = false;
  image(panicRoom2, 0, 0, 1200, 900);
  textSize(25);
  fill(0);
  image(text_box_grey, 0, 700);
  text_box_grey.resize(650, 300);
  text("Everything loses its color and you feel  ", 60, 800);
  text("as if you're being swallowed by darkness. ", 60, 850);
  image(icon, 1000, 800, 30, 30);
  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    currentScene10();
    scene9 = false;
    scene10 = true;

  }
}

function currentScene10() { // PANIC_2
  console.log("currentScene10");
  scene9 = false;
  image(panicRoom2, 0, 0, 1200, 900);
  textSize(25);
  fill(0);
  image(text_box_grey, 0, 700);
  text_box_grey.resize(850, 300);
  text("Everything loses its color and you feel  ", 60, 800);
  text("as if you're being swallowed by darkness. ", 60, 850);
  image(icon, 1000, 600, 30, 30);
  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 550 && mouseY < 750) {
    currentScene11();
    scene10 = false;
    scene11 = true;
  }
}

function currentScene11() { // PANIC 3
  console.log("currentScene11");
  scene10 = false;
  image(panicRoom3, 0, 0, 1200, 900);
  textSize(25);
  fill(0);
  image(text_box_grey, 0, 700);
  text_box_grey.resize(650, 600);
  text("... ", 60, 700);
  text("... ", 60, 750);
  image(icon, 1000, 800, 30, 30);

  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 750 && mouseY < 850) {
    currentScene12();
    scene11 = false;
    scene12 = true;
  }
}

function currentScene12() {
  console.log("currentScene12");
  scene11 = false;

  loadPixels();
  var lightRadius = 200;
  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  room_panic_mode.loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var loc = (x + y * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = room_panic_mode.pixels[loc];
      var g = room_panic_mode.pixels[loc + 1];
      var b = room_panic_mode.pixels[loc + 2];

      var distance = dist(x, y, mouseX, mouseY);


      var adjustBrightness = map(distance, 0, lightRadius, 1, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);

      // Set the display pixel to the image pixel
      pixels[loc] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }
  updatePixels();
  //  image(text_box,0,-10);
  //  text_box.resize(780,70);
  textSize(17);
  fill(255);
  text("Use your Ray to find the note ", 50, 35);
  //image(noteSavesU,0,0);

  if (mouseIsPressed && mouseX > 825 && mouseX < 880 &&
    mouseY > 180 && mouseY < 230) {
    note();
    scene12 = false;
    scene13 = false;
  }
}

function note() { //
  scene12 = false;
  scene13 = false;
  console.log("notescene");

  image(noteIsFound, 0, 0);

  textSize(25);
  fill(0);
  text("You've found the motivation to create again! ", 60, 750);
  text("You can now draw on your sketchbook. ", 60, 830);
  image(icon, 1000, 600, 30, 30);
  if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
    mouseY > 550 && mouseY < 750) {
    currentScene13();
    noteScene = false;
    scene12 = false;
    scene13 = true;
    happySong.play();
  }


}

function currentScene13() { // scene after the darkness
  console.log("currentScene13");
  scene12 = false;
  image(room_clean, 0, 0);
  image(sketchbook, 800, 370);

  if (mouseIsPressed && mouseX > 800 && mouseX < 970 &&
    mouseY > 370 && mouseY < 480) {
     sketchAnimation();
     scene13 = false;
     aniscene = true;
      //textSize(25);
}
}

function sketchAnimation () {
  scene13 = false;

    console.log("ani");

    sketchbook_Opens.goToFrame(sketchbook_Opens.getLastFrame());
    animation(sketchbook_Opens, 600, 450);
    textSize(25);
    //fill(0);
    text("Start by clicking. ", 60, 700);
    text("Hover slowly over the sketchbook to draw! ", 60, 750);

    image(icon, 1000, 600, 30, 30);

    if (mouseIsPressed && mouseX > 900 && mouseX < 1030 &&
      mouseY > 550 && mouseY < 750) {
      currentScene14();
      aniscene = false;
      scene13 = false;
      scene14 = true;
}


//  if(sketchbook_Opens.getLastFrame() {

  //  }
}

function currentScene14() { // sketchbook final scene
    aniscene = false;
  console.log("currentScene14");
  console.log(mouseX,mouseY);


  drawing.push(mouseX);
  drawing.push(mouseY);

  fill(0, 100);
  noStroke();

  for (let i = 0; i < drawing.length; i++)
    image(pencilUcu,drawing[i * 2], drawing[i * 2 + 1], 10, 10);

    image(pinkRect, 980, 800, 180, 30);
    textSize(12);
    fill(0);
    text("Save Your Sketch ", 1000, 820);

    if (mouseIsPressed && mouseX > 900 && mouseX < 1050 &&
      mouseY > 750 && mouseY < 850) {
       saveCanvas('mySketch', 'jpg');
  }
}


function mousePressed() { /// dragging the trash + pencil ///

  if (scene7) {
    puzzle.mousePressed(mouseX, mouseY);
  }
  if (sceneBook) {
    puzzle1.mousePressed(mouseX, mouseY);
  }
  if (sceneDrawing) {
    puzzle2.mousePressed(mouseX, mouseY);
  }

  if (scenePlant) {
    puzzle3.mousePressed(mouseX, mouseY);
  }
  if (sceneSmiley) {
    puzzle4.mousePressed(mouseX, mouseY);
  }

  for (var i = 0; i < papers.length; i++) {

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


function mouseDragged() {

  if (scene7) {
    puzzle.mouseDragged(mouseX, mouseY);
  }
  if (sceneBook) {
    puzzle1.mouseDragged(mouseX, mouseY);
  }
  if (sceneDrawing) {
    puzzle2.mouseDragged(mouseX, mouseY);
  }

  if (scenePlant) {
    puzzle3.mouseDragged(mouseX, mouseY);
  }
  if (sceneSmiley) {
    puzzle4.mouseDragged(mouseX, mouseY);
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

  if (scene7) {
    puzzle.mouseReleased();
  }
  if (sceneBook) {
    puzzle1.mouseReleased();
  }

  if (sceneDrawing) {
    puzzle2.mouseReleased();
  }

  if (scenePlant) {
    puzzle3.mouseReleased();
  }
  if (sceneSmiley) {
    puzzle4.mouseReleased();
  }

  // Quit dragging
  for (var i = 0; i < papers.length; i++) {
    papers[i].locked = false;
  }
//  dragging = false;
}


function Paper(tempColor, tempSize) {
  this.c = tempColor //tint(random(0,255));
  this.xpos = random(width);
  this.ypos = random(600, 900);
  this.xpos2 = random(width);
  this.ypos2 = random(700, 900);
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

      if (mouseIsPressed && this.paperover) {
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
    image(greenpaper, this.xpos2, this.ypos2, this.papersize, this.papersize);
    image(paper, this.xpos, this.ypos, this.papersize, this.papersize);

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
      //var h1 = createElement("h1", "Well Done!");
      this.canPlay = false;
      lockingCounter++;
    } else {

      console.log("Right places: " + nrCorrect);
    }
  };
  return Puzzle;
}());
