/*    const canvasi = document.getElementById('myCanvasss');

    const ctx = canvasi.getContext('2d');

    

    function drawBlinkingCircle() {

      ctx.clearRect(0, 0, canvasi.width, canvasi.height);

    

      // Draw the circle with a blinking effect

      ctx.beginPath();

      ctx.arc(100, 100, 40, 0, 2 * Math.PI);

      ctx.fillStyle = blinkingEffect() ? '#ccc' : 'transparent';

      ctx.fill();

    

      requestAnimationFrame(drawBlinkingCircle);

    }

    

    function blinkingEffect() {

      // Customize your blinking logic here

      return Math.floor(Date.now() / 500) % 2 === 0;

    }

    

    drawBlinkingCircle(); */

/*  const canvasi = document.getElementById('myCanvasss');
    const ctx = canvasi.getContext('2d');
 
    function drawBlinkingShapes() {
      ctx.clearRect(0, 0, canvasi.width, canvasi.height);
 
      // Draw the blinking circle
      drawBlinkingCircle();
 
      // Draw the blinking rectangle with rotation
      drawBlinkingRectangle();
 
      requestAnimationFrame(drawBlinkingShapes);
    }
 
    function drawBlinkingCircle() {
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0, 2 * Math.PI);
      ctx.fillStyle = blinkingEffect() ? '#ccc' : 'transparent';
      ctx.fill();
    }
 
    function drawBlinkingRectangle() {
      ctx.save();
      ctx.translate(50, 50); // Adjust the position as needed
      ctx.rotate((Math.PI / 180) * 45); // Rotate by 45 degrees
 
      ctx.beginPath();
      ctx.rect(1, 1, 8, 2);
      ctx.fillStyle = blinkingEffect() ? '#ccc' : 'transparent';
      ctx.fill();
 
      ctx.restore();
    }
 
    function blinkingEffect() {
      return Math.floor(Date.now() / 500) % 2 === 0;
    }
 
    drawBlinkingShapes(); */

/* const canvasi = document.getElementById('myCanvasss');
    const ctx = canvasi.getContext('2d');

    function drawBlinkingShapes() {
      ctx.clearRect(0, 0, canvasi.width, canvasi.height);

      // Draw the blinking circle with stroke
      drawBlinkingCircle();

      // Draw the blinking rectangle with rotation
      drawBlinkingRectangle();

      requestAnimationFrame(drawBlinkingShapes);
    }

    function drawBlinkingCircle() {
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0, 2 * Math.PI);
      ctx.fillStyle = 'transparent';
      ctx.strokeStyle = blinkingEffect() ? '#ccc' : 'transparent';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    function drawBlinkingRectangle() {
      ctx.save();
      ctx.translate(50, 50); // Adjust the position as needed
      ctx.rotate((Math.PI / 180) * 45); // Rotate by 45 degrees

      ctx.beginPath();
      ctx.rect(1, 1, 8, 2);
      ctx.fillStyle = blinkingEffect() ? '#ccc' : 'transparent';
      ctx.fill();

      ctx.restore();
    }

    function blinkingEffect() {
      return Math.floor(Date.now() / 500) % 2 === 0;
    }

    drawBlinkingShapes(); */

const canvasi = document.getElementById("myCanvasss");
const ctx = canvasi.getContext("2d");

function drawBlinkingShapes() {
  ctx.clearRect(0, 0, canvasi.width, canvasi.height);

  // Draw the blinking circle with stroke
  drawBlinkingCircle();

  // Draw the hollow circle
  drawHollowCircle();

  // Draw the blinking rectangle with rotation
  drawBlinkingRectangle();

  requestAnimationFrame(drawBlinkingShapes);
}


function drawBlinkingCircle() {
  ctx.beginPath();
  ctx.arc(100, 100, 40, 0, 2 * Math.PI);
  ctx.fillStyle = blinkingEffect() ? "#ccc" : "transparent";
  ctx.fill();
}
/*   function drawBlinkingCircle() {
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0, 2 * Math.PI);
      ctx.fillStyle = 'transparent';
      ctx.strokeStyle = blinkingEffect() ? '#ccc' : 'transparent';
      ctx.lineWidth = 3;
      ctx.stroke();
    } */

function drawHollowCircle() {
  ctx.beginPath();
  ctx.arc(150, 150, 30, 0, 2 * Math.PI);
  ctx.strokeStyle = blinkingEffect() ? "#ccc" : "transparent";
  ctx.lineWidth = 18;
  ctx.stroke();
}

function drawBlinkingRectangle() {
  ctx.save();
  ctx.translate(50, 50); // Adjust the position as needed
  ctx.rotate((-45 * Math.PI) / 180); // Rotate by 45 degrees

  ctx.beginPath();
  ctx.rect(-1, 1, 58, 5);
  ctx.fillStyle = blinkingEffect() ? "#ccc" : "transparent";
  ctx.fill();

  ctx.restore();
}

function blinkingEffect() {
  return Math.floor(Date.now() / 500) % 2 === 0;
}

drawBlinkingShapes();
