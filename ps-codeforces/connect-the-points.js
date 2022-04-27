// https://codeforces.com/problemset/problem/1666/C
// You're given three points on a plane. 
// You should choose some segments on the plane

// Codeforce read input
var n = readline();
var coordinateArray = [];
for(var i = 0; i < n; i++) {
    // read line and push to coordinateArray
    coordinateArray.push(readline().split(' ').map(Number));
}

// Connect the points
function getMinMoves(coordinate) {
    var minMoves = 0;
    var euclideanSpace = calculateEuclideanSpace(coordinate);
    while(euclideanSpace % 1 !== 0) {
        minMoves++;
        euclideanSpace = calculateEuclideanSpace(coordinate);
    }
    return minMoves;
}

// Traverse coordinateArray and find minMoves, print them line by line
for(var i = 0; i < coordinateArray.length; i++) {
    print(getMinMoves(coordinateArray[i]));
}

// Codeforce end of file
