var obj = {
	showContext: function showContext(){
		setTimeout(() => {
			this.log('after 1000 ms')
		}, 1000)

	},
	log: function( value ){
			console.log(value);
	}
}

function randomNumber(){
	obj.log('Gerando a random number ...');
	return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
	return a * b 
}

console.log( multiply(10).toFixed() );

//obj.log('Teste');
//obj.showContext()

var obj = {
	
}