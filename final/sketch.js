const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 




// feel free to change these values as you like!
const c1 = {
    x: 600,
    y: 400,
    diam: 200,
    speed: 5,
    color: 'yellow'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;

    if(c1.x > canvasWidth + 100) {
        c1.x = 0
    }

    // redraw the car:
    happyFace(c1.x, c1.y, c1.width, c1.color);

    c2.x1 -= c2.speed;

    if(c2.x1 < -100) {
        c2.x1 = canvasWidth
    }

    // redraw the car:
    happyFace(c2.x1, c2.y1, c2.width, c2.color);
    
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
}

// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(x, y, diam, diam);
    
    // Smile
    var startAng = .1*PI
    var endAng = .9*PI
    var smileDiam = .6*diam;
    arc(x, y, smileDiam, smileDiam, startAng, endAng);
    
    // Eyes
    var offset = .2*diam;
    var eyeDiam = .1*diam;
    fill(0);
    ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
    ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}

function happyFace (x, y, diam) {
    // Face
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(x, y, diam, diam);
    
    // Smile
    var startAng = .1*PI
    var endAng = .9*PI
    var smileDiam = .6*diam;
    arc(x, y, smileDiam, smileDiam, startAng, endAng);
    
    // Eyes
    var offset = .2*diam;
    var eyeDiam = .1*diam;
    fill(0);
    ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
    ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}


const c2 = {
    x1: canvasWidth,
    y1: 100,
    width: 200,
    speed: 5,
    color: 'hotpink'
};

function happyFace (x, y, diam) {
    // Face
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(x, y, diam, diam);
    
    // Smile
    var startAng = .1*PI
    var endAng = .9*PI
    var smileDiam = .6*diam;
    arc(x, y, smileDiam, smileDiam, startAng, endAng);
    
    // Eyes
    var offset = .2*diam;
    var eyeDiam = .1*diam;
    fill(0);
    ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
    ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}

// const canvas = document.getElementById('myCanvas');

// function openYoutube() {
//     window.open('https://youtube.com', '_blank');
//   }
  
//   canvas.addEventListener('click', function(event) {
//     const x = event.clientX - canvas.getBoundingClientRect().left;
//     const y = event.clientY - canvas.getBoundingClientRect().top;
    
//     if (x > c1.x && x < c1.x + c1.diam && y > c1.y && y < c1.y + c1.diam) {
//       openYoutube();
//     } else if (x > c2.x1 && x < c2.x1 + c2.width && y > c2.y1 && y < c2.y1 + c2.width) {
//       openYoutube();
//     }
//   });


// function drawCar(x1, y1, size, fillColor, wheelColor='black') {
//     fill(255, 255, 0);
//     stroke(0);
//     strokeWeight(2);
//     ellipse(x, y, diam, diam);
    
//     // Smile
//     var startAng = .1*PI
//     var endAng = .9*PI
//     var smileDiam = .6*diam;
//     arc(x, y, smileDiam, smileDiam, startAng, endAng);
    
//     // Eyes
//     var offset = .2*diam;
//     var eyeDiam = .1*diam;
//     fill(0);
//     ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
//     ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
// }