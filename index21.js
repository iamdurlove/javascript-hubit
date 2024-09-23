// class MyClass {
// 	constructor(a, b) {
// 		this.a = a;
// 		this.b = b;

// 		console.log(a + b);
// 	}
// }

// const myObj = new MyClass(5, 6);

// classs - pass data using constructor (prompt) and display the data in another function

// class MyClass2 {
// 	constructor(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	}
// 	display() {
// 		alert(this.a + this.b);
// 	}
// }

// const a = parseInt(prompt("Enter a value"));
// const b = parseInt(prompt("Enter b value"));

// const myObj2 = new MyClass2(a, b);
// myObj2.display();

//forEach

// const data = [1, 2, 3, 4, 5];

// data.forEach((item, i, arr) => {
// 	console.log(arr);
// });

// array of object
const arr = [
	{ name: "hari", age: 25 },
	{ name: "ram", age: 22 },
	{ name: "sita", age: 23 },
];

// arr.forEach((item, i, arr) => {
// 	console.log(item);
// });

// for (let item of arr) {
// 	console.log(item);
// }

// filter method in javascript

const myFilter = arr.filter((item) => item.name !== "hari");
console.log(myFilter);
