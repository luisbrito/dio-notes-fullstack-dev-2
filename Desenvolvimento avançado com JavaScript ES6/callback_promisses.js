//Promisses


const doSommeThingPromise = () => new Promise( (resolve, reject ) =>{
	setTimeout(function(){
		resolve('Firt Data')
	}, 1000);

});

const doOtherThingPromise = () => new Promise( (resolve, reject ) =>{
	setTimeout(function(){
		resolve('Second Data')
	}, 1000);

});

doSommeThingPromise()
	.then(data => {
		console.log(data);
		return doOtherThingPromise();
	}).then( data2 => console.log(data2))
	.catch();

// Callback

Promise.all([doSommeThingPromise(), doOtherThingPromise()]).then(data => {
	console.log('Promise.all data ', data)
});

Promise.race([doSommeThingPromise(), doOtherThingPromise()]).then(data => {
	console.log('race data ', data)
});

function doSommeThing(callback) {
	setTimeout(function(){
		callback('Firt Data')
	}, 1000);
}

function doOtherThing(callback) {
	setTimeout(function(){
		callback('Second Data')
	}, 1000);
}


function doAll(){

}