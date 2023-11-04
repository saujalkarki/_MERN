console.log(1);

setTimeout(() => console.log(2), 2000);

new Promise((resolve, reject) => resolve(3)).then((resolved) =>
  console.log(resolved)
);

function func() {
  console.log(4);
  setTimeout(() => console.log(5), 500);
  new Promise((resolve, reject) => setTimeout(() => resolve(6), 1000)).then(
    (resolved) => console.log(resolved)
  );

  new Promise((resolve, reject) => resolve(7)).then((resolved) =>
    console.log(resolved)
  );
}

func();

// stack
// push conosle.log to stack -->1--> pop console.log
// push setTimeout1() to stack -->transfer to web api-->pop setTimeout()
// push Promise1() to stack -->transfer to job queue --> pop Promise()
// push func() to stack -->run func
// push conosle.log to stack -->4--> pop console.log
// push setTimeout2() to stack -->transfer to web api-->pop setTimeout()
// push Promise2() to stack -->transfer to job queue --> pop Promise()
// push Promise3() to stack -->transfer to job queue --> pop Promise()
