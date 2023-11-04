const bar = () => console.log("bar");

const baz = () => console.log("baz");

bar();
baz();

//stack
// push into stack --> bar();--> run bar code -->pop out of stack
// push into stack --> baz();--> run baz code -->pop out of stack

// running foo function synchronously
const foo1 = function () {
  console.log("foo1");
  bar();
  baz();
};

foo1();

// here while calling the above foo1 function :
/* at first foo goes in stack and opens out while opening foo1 the first thing added in stack is the console "foo1". so foo1 is printed, after that bar is added in the stack and it runs printing "bar" in console. after that bar function closes and get out of stack and baz is runed. after it runs baz "baz" is printed and the function closes and get outs of stack after every operation inside the foo1 fucntion is done and executed the function get terminated and the foo1 function comes out of stack too and the call stack get empty.*/

// running foo function asynchronously
// web api's are not handeled by call stack
const foo = () => {
  console.log("foo");

  setTimeout(bar, 3000);

  new Promise((resolve, reject) =>
    setTimeout(() => resolve("runs at last"), 2000)
  ).then((resolved) => console.log(resolved));

  new Promise((resolve, reject) =>
    setTimeout(() => resolve("runs at third last"), 0)
  ).then((resolved) => console.log(resolved));

  new Promise((resolve, reject) =>
    setTimeout(() => reject("rejected  at second last"), 0)
  )
    .then((resolved) => console.log(resolved))
    .catch((rejected) => console.log(rejected));

  new Promise((resolve, reject) =>
    resolve("This will be printed after baz and before bar")
  ).then((reslv) => console.log(reslv));

  baz();
};

foo();

// promises are runed at first because they are puted inside job queue and callback functions are runed at last

// callback function that are called inside promises are runed at vary last

// callback queue and job queue
// promises are handeled by job queue
// job queue have higher priority than callback queue

// stack
// push  console to stack --> foo() --> runs foo code
// console.log "foo"
// push setTimeout to stack --> setTimeout() --> handeled by web api
// push Promise to stack --> Promise --> added in job queue
// push baz to stack --> baz() --> runs baz code
// console.log "baz"
// Promise resolve --> console log primise resolved value
// run bar()
