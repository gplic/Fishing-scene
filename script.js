// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 400;
cnv.height = 400;

// Animation variables
let cloud1X = 50;
let cloud1Y = 40;
let cloud2X = 150;
let cloud2Y = 10;
let cloud3X = 250;
let cloud3Y = 50;

// Triggers the start
requestAnimationFrame(draw);

// Put ALL drawing code in the draw function
// Runs at 60 FPS (frames per second)
function draw() {

  // sky 
  ctx.fillStyle = 'rgb(173, 216, 230)';
  ctx.fillRect(0,0,cnv.width,cnv.height);

  // sun
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(75,50,20,0,2*Math.PI);
  ctx.fill();

  // clouds
  let cloud = document.getElementById('cloud');
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 75, 50);
  ctx.drawImage(cloud, cloud3X, cloud3Y, 75, 50);

  // Water
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.fillRect(0,250,cnv.width,250);

  // Pier and posts
  ctx.beginPath();
  ctx.fillStyle = 'brown';
  ctx.fillRect(0,200,250,25);

  // loop the 4 posts
  for (let i=5; i<=155; i+=50){
    ctx.fillRect(i,150,10,350);
  }

  // fisherperson
  // head
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 140, 15, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(248,155);
  ctx.lineTo(243,195);
  ctx.stroke();

  // upper leg
  ctx.beginPath();
  ctx.moveTo(243,195);
  ctx.lineTo(265,205);
  ctx.stroke();

  // lower leg
  ctx.beginPath();
  ctx.moveTo(265,205);
  ctx.lineTo(270,230);
  ctx.stroke();

  // arm
  ctx.beginPath();
  ctx.moveTo(246,170);
  ctx.lineTo(280,180);
  ctx.stroke();

  // fishing pole
  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(275,190);
  ctx.lineTo(350,100);
  ctx.stroke();

  // fishing lineTo
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(350,100);
  ctx.lineTo(350,300);
  ctx.stroke();

  // fishhead 1
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(220, 300, 10, 0, 2 * Math.PI);
  ctx.fill();
  
  // fishtail 1
  ctx.beginPath()
  ctx.moveTo(220,300);
  ctx.lineTo(240,290);
  ctx.lineTo(240,310);
  ctx.fill();

  // fishhead 2
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(300, 325, 10, 0, 2 * Math.PI);
  ctx.fill();

  

  // fishtail 2
  ctx.beginPath()
  ctx.moveTo(300,325);
  ctx.lineTo(320,315);
  ctx.lineTo(320,335);
  ctx.fill();


  // ANIMATION
  cloud1X = cloud1X + 1;
  cloud2X += 2;
  cloud3X += 1.5;

  // When cloud one exits right side of screen put it on the left
  if (cloud1X >= 400) {
    cloud1X = -75;

    // Reapper at a random height
    cloud1Y = Math.random()*150
  }
  if (cloud2X >= 400) {
    cloud2X = -75;
    cloud2Y = Math.random()*150
  }
  if (cloud3X >= 400) {
    cloud3X = -75;
    cloud3Y = Math.random()*150
  }

  requestAnimationFrame(draw);
}

document.addEventListener ("keypress", keyBoardHandler)

function keyBoardHandler(event) {
  console.log(event.code);
}