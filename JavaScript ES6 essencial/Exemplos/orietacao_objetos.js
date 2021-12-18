'use strict'



(() => {
  const user = {
    name: "Guilherme",
    lastName: "Cabrini da Silva"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})()

(() => {

})()

const arr = [];


arr.forEach((fruta, index, arr) => {

});

arr.map()

arr.flat()

var sum = (a , b) => {
	return a + b;
}