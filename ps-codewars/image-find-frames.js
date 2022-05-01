// https://www.codewars.com/kata/5910b92d2bcb5d98f8000001/train/javascript
/*
var bc = [0,0,0]
var wc = [255,255,255]
var gc = [0,255,0]
var rc = [255,0,0]


var img1 = [
  [bc,bc,bc,wc],
  [bc,wc,bc,wc],
  [bc,bc,bc,wc]
]
//harder
var img2 = [
  [bc,bc,bc,bc],
  [bc,wc,bc,bc],
  [bc,bc,bc,bc]
]
//overlapping squares
var img3 = [
  [bc,bc,bc,bc,bc,wc,wc],
  [bc,wc,wc,wc,bc,wc,wc],
  [bc,wc,bc,bc,bc,bc,bc],
  [bc,wc,bc,wc,bc,wc,bc],
  [bc,bc,bc,bc,bc,wc,bc],
  [wc,wc,bc,wc,wc,wc,bc],
  [wc,wc,bc,bc,bc,bc,bc],
]

var img4 = [
  [bc,bc,bc,bc],
  [bc,bc,bc,bc],
  [bc,bc,bc,bc]
]

*/

// Find frames in an image
var findFrames = function (img) {
    var frames = [];
    var rows = img.length;
    var cols = img[0].length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
            frames.push([i, j]);
        }
        }
    }
    return frames;
}