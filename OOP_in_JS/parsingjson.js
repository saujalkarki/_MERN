const obj1 = {
  TYPE: "JSON",
  name: "Saujal",
  caste: "Karki",
  age: 17,
  University: "TU",
  Games: ["Football", "Basketball"],
  location: {
    country: "Nepal",
    city: "Itahari",
  },
  birthDate: new Date(),
  func1: function () {
    console.log("func1");
  },
};

// object
console.log(obj1);

// changing object to json
const inJson = JSON.stringify(obj1);
console.log(inJson);

// changing json to object
const againParsed = JSON.parse(inJson);
console.log(againParsed);
