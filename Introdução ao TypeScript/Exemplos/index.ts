

function soma(a: number, b:number){
	return a + b;
}

soma(1, 2)


interface IAnimal {
	nome: String;
	tipo: 'terrestre' | 'aquatico'
}


interface IFelinos extends IAnimal {
	visaoNoturna: boolean;
}

const animal: IAnimal = {
	nome : 'Elefante',
	'tipo' : 'terrestre'
}