
// Symbols

const uniqueID = Symbol('Hello');

console.log(uniqueID)

const obj = {
	[uniqueID]: 'Hello'
}


console.log(obj)