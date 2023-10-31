// synchronous js

const a = "apple";
const b = "ball";

// const func1 = function () {};
// const func1 = () => {};
function func1(value) {
  console.log(value);
}

function func2(value) {
  console.log(value);
}

func1(a);
func2(b);

// function is a first class citizen
const func3 = function () {
  console.log("cat");
};

func3();

function func4(func, value) {
  func(value);
}

func4(func1, a);

// asynchronous js
// callback function
function func5(cb) {
  console.log("before callback");
  cb("dog");
  console.log("after callback");
}

// func5(func3);
func5(func1);

// synchronously
// function generateSum() {
//   document.getElementById("sum").innerHTML = 10;
// }

// using callback function

function generateSum() {
  function displaySum(sum) {
    setTimeout(() => (document.getElementById("sum").innerHTML = sum), 2000);
  }

  function calculateSum(num1, num2, cb) {
    const sum = num1 + num2;
    cb(sum);
  }
  calculateSum(5, 5, displaySum);
}

setTimeout(() => console.log("hey this is a setTimeout function"), 3000);
// setInterval(() => console.log("This will pop-up every 3 second"), 3000);

// callback hell
function func6(value, cb) {
  console.log("func6", value);
  return cb(value + 2);
}
function func7(value, cb) {
  console.log("func7", value);
  return cb(value + 3);
}
function func8(value, cb) {
  console.log("func8", value);
  return cb(value + 4);
}

func6(2, function (sum1) {
  func7(sum1, function (sum2) {
    func8(sum2, function (sum3) {
      func1(sum3);
    });
  });
});

// promise
// pending, fullfilled, rejected
const promise1 = new Promise(function (resolve, reject) {
  //   producing code
  resolve("yeah 1");
  reject("Oh no 1");
});

// promise1.then(
//   function (rslvdVal) {
//     console.log("resolved", rslvdVal);
//   },
//   function (rjctVal) {
//     console.log("rejcetd", rjctVal);
//   }
// );

// consuming code
promise1
  .then((rslvdVal) => {
    console.log(`resolved ${rslvdVal}`);
  })
  .catch((rjctVal) => {
    console.log(`rejected ${rjctVal}`);
  });
