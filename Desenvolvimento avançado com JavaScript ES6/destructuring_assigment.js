
// Convetional

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var tomato = arr[3][0];
console.log(tomato)

// Destructuring Assignment

var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(banana)

console.log(tomato)


function sum( [a,b] = [0,0] ){
	return a + b
}

console.log( sum() )

console.log( sum([5,5]) )