let person = {
  name: "Saujal",
  caste: "Karki",
  age: 19,
  nationality: "Nepali",
  family: {
    father: "Baba",
    mother: "Mamu",
  },
};

console.log(person);
console.log(person.caste);
console.log(person.family);
console.log(person.family.mother);

let ax = {
  name: "Saujal",
  caste: "Karki",
  age: 20,
  parent: {
    father: "Baba",
    mother: "Mamu",
  },
};

console.log(ax);
console.log(Object.keys(ax));
console.log(Object.values(ax));
console.log(Object.entries(ax));

const aaa = new Date();
// const aaa = new Date("2001-01-01");

console.log(aaa.toISOString());

ax["uni"] = "Tribhuvan Uni";

console.log(ax);
