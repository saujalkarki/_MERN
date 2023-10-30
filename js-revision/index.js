"use strict";

function changeContent() {
  document.getElementById("paragraph").innerHTML = "Content Changed";
}

// let const var
var a = 1;
let b = 2;
const c = 3;

console.log(a, b, c);

a = 324;
b = 231;
// c = 345; const cannot be changed

console.log(a);
console.log(b);
console.log(c);

// object

const user = {
  name: "Saujal Karki",
  age: 18,
  gender: "male",
  info: function () {
    return `My self ${this.name}. I am ${this.age} years old ${this.gender}`;
  },
  get UserInfo() {
    return `My self ${this.name}. I am ${this.age} years old ${this.gender}`;
  },
  set changeUserName(newName) {
    this.name = newName;
  },
};

console.log(user.name);
console.log(user["age"]);
console.log(user["gender"]);
console.log(user.info());
console.log(user["info"]());
console.log(user.UserInfo);
user.changeUserName = "Madhav Karki";
console.log(user.name);

console.log("-- for in --");
// for in
for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

const arr = [1, 2, 3, 5, 4];
console.log("-- for of --");
// for of
for (const a of arr) {
  console.log(a);
}

const ary = ["a", "adsf", "as", "sdf", "re"];
//for Each
ary.forEach((ele, inx) => {
  console.log(`${ele} -- ${inx}`);
});

// ES6
// this keyword
console.log(this);

//
function func() {
  console.log(this);
}

func(); // in strict mode this represents undefined while in normal mode it represents global object

const func1 = () => {
  console.log(this);
};

func1();

//spread and rest operator
const array2 = ["apple", "ball", "cat", "dog"];
const array3 = [...array2]; //spread operator

console.log(array2);
console.log(array3);
