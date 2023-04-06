// https://www.codewars.com/kata/5910b92d2bcb5d98f8000001/train/javascript

// A given 2D array of size aXb represents pixels of an image.
// Every pixel contains an array with 3 numbers [r,g,b] repressenting the pixel's red green and blue values.
// r,b,g values span from 0 to 255.
// The task is simple: Find all frames.
// Find frames in an image

// A frame:
// Has a consistant color throughout. - Most basic example is the blue square.
// (The red square works, but the yellow one doesn't since it is not continuous.)
// Complete frames where all internal cells have colors that are identical to the color of the frame are NOT valid frames. In other words, if a frame is a solid block consisting of only one color, then it is not valid.
// Can overlap if the color is continous.
// Notice there are 3 black frames. The one touching the top left, the one touching the bottom, and a small one where they meet.
// Frames are always 1 pixel thick. So, a 9x9 black frame inside of a 16x16 black frame are still considered as two seperate frames.

var findFrames = function (img) {
  // Your code here
  // 1. Find all unique colors
  let colors = [];
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      if (!colors.includes(img[i][j].toString())) {
        colors.push(img[i][j].toString());
      }
    }
  }
  // 2. Create a map of colors and their locations
  let colorMap = new Map();
  for (let i = 0; i < colors.length; i++) {
    colorMap.set(colors[i], []);
  }
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      colorMap.get(img[i][j].toString()).push([i, j]);
    }
  }
  // 3. Remove colors that are not frames
  colorMap.forEach((value, key) => {
    if (isFrame(value, img)) {
      colorMap.set(key, value);
    } else {
      colorMap.delete(key);
    }
  });
  // 4. Convert the map to an array
  let frames = [];
  colorMap.forEach((value, key) => {
    frames.push(value);
  });
  return frames;
}

function isFrame(locations, img) {
  // 1. Check if the color is continuous
  let isContinuous = true;
  for (let i = 0; i < locations.length; i++) {
    let neighbors = getNeighbors(locations[i], img);
    if (!neighbors.includes(locations[i].toString())) {
      isContinuous = false;
      break;
    }
  }
  // 2. Check if the color is a solid block
  let isSolidBlock = true;
  let color = img[locations[0][0]][locations[0][1]];
  for (let i = 0; i < locations.length; i++) {
    if (img[locations[i][0]][locations[i][1]].toString() !== color.toString()) {
      isSolidBlock = false;
      break;
    }
  }
  return isContinuous && !isSolidBlock;
}

function isFrame(locations, img) {
  // 1. Check if the color is continuous
  let isContinuous = true;
  for (let i = 0; i < locations.length; i++) {
    let neighbors = getNeighbors(locations[i], img);
    if (!neighbors.includes(locations[i].toString())) {
      isContinuous = false;
      break;
    }
  }
  // 2. Check if the color is a solid block
  let isSolidBlock = true;
  let color = img[locations[0][0]][locations[0][1]];
  for (let i = 0; i < locations.length; i++) {
    if (img[locations[i][0]][locations[i][1]].toString() !== color.toString()) {
      isSolidBlock = false;
      break;
    }
  }
  return isContinuous && !isSolidBlock;
}

function getNeighbors(location, img) {
  let neighbors = [];
  let row = location[0];
  let col = location[1];
  if (row > 0) {
    neighbors.push(img[row - 1][col].toString());
  }
  if (row < img.length - 1) {
    neighbors.push(img[row + 1][col].toString());
  }
  if (col > 0) {
    neighbors.push(img[row][col - 1].toString());
  }
  if (col < img[0].length - 1) {
    neighbors.push(img[row][col + 1].toString());
  }
  return neighbors;
}