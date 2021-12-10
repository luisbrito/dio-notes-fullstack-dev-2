console.log('currying.js');

const user ={
	name : "Luis",
	lastName : "Fernando"
}


function getUserWithFullName(user){
	return{
		...user,
		fullName :`${user.name} ${user.lastName}`
	}
}


const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);