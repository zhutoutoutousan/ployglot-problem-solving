// https://www.codewars.com/kata/54d558c72a5e542c0600060f/train/javascript

// For loop create an array from 1 to 100
bombArray = [];

for (let i = 1; i <= 1000; i++) {
    bombArray.push(i);
}
Bomb.diffuse(42);
Bomb.diffuse(5);
Bomb.diffuse(4);
Bomb.diffuse(3);
Bomb.diffuse(2);
Bomb.diffuse(1);
Bomb.diffuse();

// Diffuse the bomb from 1 to 100
bombArray.forEach(function(element) {
    let a = Bomb.diffuse(element);
    console.log( element );
    console.log(a)
});


