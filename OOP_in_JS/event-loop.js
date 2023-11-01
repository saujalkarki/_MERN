const bar = () => console.log("bar");

const baz = () => console.log("baz");

bar();
baz();

// stack
const foo = () => {
  console.log("foo");

  setTimeout(bar, 0);

  new Promise((resolve, reject) =>
    setTimeout(() => resolve("runs at last "), 1000)
  ).then((resolve) => console.log(resolve));

  new Promise((resolve, reject) =>
    resolve("should be right after baz, before bar")
  ).then((resolve) => console.log(resolve));

  baz();
};

foo();
