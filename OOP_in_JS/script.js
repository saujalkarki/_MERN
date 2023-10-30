"use strict";

console.log("Classes");

// classes
class Users {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getUserInfo() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
    };
  }
  setUserName(newName) {
    this.name = newName;
  }
}

const userA = new Users("Saujal", 20, "male");
const userB = new Users("Anisha", 23, "female");
const userC = new Users("Nischal", 17, "male");

console.log(userA);
console.log(userB);
console.log(userC);
console.log(userA.getUserInfo());
console.log(userA.name);
userA.setUserName("Madhav");
console.log(userA.name);

// Inheritance
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const person1 = new Person("Saujal");
console.log(person1);
console.log(person1.name);
console.log(person1.getName());

class Student extends Person {
  university;

  constructor(name, university) {
    super(name);
    this.university = university;
  }

  getStudentInfo() {
    return `${this.name} studies in ${this.university}`;
  }
}

const student1 = new Student("Saujal", "TU");

console.log(student1);
console.log(student1.name);
console.log(student1.university);
console.log(student1.getStudentInfo());

// function Constructor
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getUserInfo = function () {
    return { name: this.name, age: this.age, gender: this.gender };
  };
  this.setUserName = function (newName) {
    this.name = newName;
  };
}

const user12 = new User("saujal", 18, "male");
console.log(user12);
console.log(user12.name);
console.log(user12.age);
console.log(user12["gender"]);
console.log(user12.getUserInfo());
console.log(user12["name"]);
user12.setUserName("Nischal");
console.log(user12["name"]);

// polymorphism
class Shape {
  constructor() {}

  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius;

  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  length;
  breadth;

  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }

  calculateArea() {
    return this.length * this.breadth;
  }
}

const circle1 = new Circle(7);
const rectangle1 = new Rectangle(2, 4);

console.log(circle1);
console.log(circle1.calculateArea());
console.log(rectangle1);
console.log(rectangle1.calculateArea());
