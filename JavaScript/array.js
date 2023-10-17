// array
let cities = ["Itahari", "Dang", "Dharan", "kathmandu"];

let citiesIndia = ["Delhi", "Mumbai", "Karnataka"];

console.log(cities);
cities.shift("Biratnagar");
console.log(cities);
console.log(cities.length);
console.log(cities.indexOf("kathmandu"));
console.log(cities[0]);

let names = ["Saujal", "Nischal", "Nirmal", "Yudeen"];
console.log(names);
console.log(names.toString().toUpperCase());
console.log(names.toString().toUpperCase().split(","));

console.log(names.join());
console.log(names.join("and"));
console.log(names.join(" and "));

console.log(delete citiesIndia[0]);
console.log(citiesIndia[0]);
console.log(citiesIndia);

let nm1 = ["Hitesh", "Sangam", "Prabesh"];
let nm2 = ["Bids", "Prans"];

console.log(nm1.concat(nm2));

let array = [
  ["+977", "+91"],
  [9847356004, [1, 2, 3, 4, 5, 6, 7], 9861601174],
];

console.log(array[0][0].concat(array[1][2]));

console.log(array.flat());
console.log(array.flat(2));

let s = [1, 2, 3];
let t = ["apple", "ball", "cat"];
let u = [1, "apple", 2, "cat"];

console.clear();
console.log(s);
console.log(t);
console.log(u);

console.log(s.length);
console.log(u.length);

s.push(4, 5, 6);
console.log(s);
console.log(s.shift(0));
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.unshift(4));
console.log(s);

console.log(s[2]);

let abc = [1, 2, 4, 3];

console.log(abc);
abc.sort();
console.log(abc);

abc.sort((a, b) => {
  return a - b;
});

console.log(abc);

abc.sort((a, b) => {
  return b - a;
});

console.log(abc);
