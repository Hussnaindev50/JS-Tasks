//Simple spread operator  usage in array
const arrVal = ["My", "name", "is", "Jack"];
console.log(arrVal); 
console.log(...arrVal); 

//copy of array using spread
const arr1 = ["one", "two"];
const arr2 = [...arr1];
console.log(arr2);
arr1.push(4);
console.log(arr1)
console.log(arr2);

//Simple spread operator  usage in objects
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { obj1, ...obj2 };
console.log(obj3);


//when spread is used as parameter it is rest parameter
function cal(a, b, ...c) {
	console.log(a,b)
	console.log(a + b+c)  //when write this it will concat
	console.log(c)
};
cal("a","b","ff",4,6,"tt")
