function fn(){
	return 'Code';
}


const arrowFn = () => 'Code here';

const arrowFn2 = () => {
	return 'Code here';
}


fn.prop = 'Funcoes tambem sao ojetos';

console.log('fn : ', fn())
console.log('fn.prop : ',fn.prop)


const logValue = value => console.log(value);
const logFnResult = fnParam => console.log( fnParam() );

logFnResult(fn);


const controlFnExec => fnParam => allowed => {
	if(allowed){
		fnParam();
	}
}

const handlerFnExecution = controlFnExec(fn);

handlerFnExecution(true);
handlerFnExecution();