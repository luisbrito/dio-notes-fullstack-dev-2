console.log('currying.js');

function soma(a){
	return function(b){
		console.log('soma : a + b = ' , a + b);
		console.log('soma : ' + a + ' + ' + b + ' = ' , a + b);
		return a + b;
	}
}

const somar2 = soma(2);

somar2(2);
somar2(3);
somar2(4);
somar2(5);
