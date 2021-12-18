//Fetch
/*
fetch('/data.json').then( responseStream => {
	responseStream.json().then(data => {
		console.log(data);
	})
}).catch( err => {
	console.log(err);
})
*/

// Async / Wait

const simpleFunc = async () => {
	return 12345;
}

simpleFunc().then(data => {
	console.log(data);
});


const asyncTimer = () => new Promise( (resolve, reject ) =>{
	setTimeout(() => {
		resolve(123456)
	}, 1000)
});

const simpleFunc2 = async () => {
	const data = await asyncTimer();
	return data;
}

simpleFunc2()
.then( data => {
	console.log(data)
})


//EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
	console.log(data)

})

emitter.emit('User logged' , { user: 'Brito'});