// Object creating method

const obj = {
	name: "Osamaaa",
	sname: "Khan",
	age:24,
	degree: "BS IT",
	cgpa:3.0
}
console.table(obj)
console.log(obj.age)       //can also find the value of object properties seperately

//By Constructor Function
function Student(name,id) {
	this.name = name,
		this.id=id
}
let data = new Student("Ammar", 2);
console.table(data)
console.log(typeof(data))  //checking type

//Destructuring of Object
const address = {
	countryName: "England",
	cityName: "London",
	streetNo: 12,
	houseNo: 4 + "c",
};
let { countryName, cityName, streetNo, houseNo } = address;
console.log(countryName)
console.log(cityName)							//simply can find the object key values

//Destructuring of Array
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];
const [firstName, lastName, website] = profile;
console.log(firstName); 
console.log(lastName); 

