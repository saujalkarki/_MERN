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

// function generateSum() {
//   function displaySum(sum) {
//     setTimeout(() => (document.getElementById("sum").innerHTML = sum), 2000);
//   }

//   function calculateSum(num1, num2, cb) {
//     const sum = num1 + num2;
//     cb(sum);
//   }
//   calculateSum(5, 5, displaySum);
// }

// setTimeout(() => console.log("hey this is a setTimeout function"), 1000);
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

/*
// promise
// pending, fullfilled, rejected
const promise1 = new Promise(function (resolve, reject) {
  //   producing code
  // resolve("yeah 1");
  //either it is resolved or rejected
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
  })
  .finally(() => {
    // finally runs in both cases either resolved or rejected
    console.log("Duniya banai mene hato se!");
  });
*/

// callback using promise
function generateSum() {
  function displaySum(sum) {
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sum), 0);
    });
    promise2
      .then((value) => {
        document.getElementById("sum").innerHTML = value;
      })
      .catch((err) => console.log("err", err))
      .finally(() => console.log("promise completed"));
  }

  function calculateSum(num1, num2, cb) {
    const sum = num1 + num2;
    cb(sum);
  }
  calculateSum(5, 5, displaySum);
}

// Error Handling
console.clear();
console.log("---Error handling start---");

function func9(value, cb) {
  if (typeof value === "number") {
    cb(null, value);
  } else {
    cb("not a number", null);
  }
}

function func10(err, value) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("value", value);
  }
}

func9("1", func10);
// func9(1, func10);

console.log("---Error handling End---");

// promise chaining
const promise3 = new Promise((resolve, reject) => {
  // producing code
  resolve(10);
  // reject(0);
});

promise3
  // consuming code
  .then((value) => {
    console.log("1", value);
    return (value += 1);
  })
  .then((value) => {
    console.log("2", value);
    return (value += 1);
  })
  .then((value) => {
    console.log("3", value);
  })
  .catch((error) => {
    console.log("Error in chaining", error);
  })
  .finally(() => {
    console.log("finally completed");
  });

// promise.all, promise.any
const promise4 = Promise.resolve(2);
const promise5 = 12; //if it is nither resoved nor rejected, it will give the resolved value
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 265);
});
const promise7 = "Saujal";

Promise.all([promise4, promise5, promise6, promise7]).then((values) => {
  console.log(values);
});

Promise.any([promise7, promise5, promise6, promise4]).then((values) => {
  console.log("promise method", values);
});

// async/await/fetch

// example 1
const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(24) /*reject(25)*/, 3000);
});

async function asyncfunc1() {
  console.log("Before await");
  const data = await promise8;
  console.log("Data", data);
  console.log("After await");
  return data;
  // return "async func 1";
  // throw new Error("Async Error 1");
}

asyncfunc1()
  .then((value) => {
    console.log("value", value);
  })
  .catch((err) => {
    console.log("error", err);
  })
  .finally(console.log("this is completed"));

// example 2
// async function asyncfunc1() {
//   const data = await "Saujal";
//   return data;
//   // return "async func 1";
//   // throw new Error("Async Error 1");
// }

// asyncfunc1()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (response.ok) {
    const data = await response.json();
    return { ...data, userId: 65 };
  }
  if (response.status !== 200) {
    throw new Error("Error found");
  }
}

fetchApi()
  .then((value) => console.log("valueAPI", value))
  .catch((error) => console.log("errorAPI", error));

// fetch always returns Promise
const response = fetch("https://jsonplaceholder.typicode.com/posts/1");

response
  .then((value) => console.log("value", value))
  .catch((error) => console.log("error", error));
