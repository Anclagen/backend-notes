const person = {
  name: "John",
  age: 30,
  job: null,
  isMarried: false,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObject = JSON.parse(personJSON);
console.log(personObject);

const person2 = {
  name: "John",
  age: 30,
  password: "secret",
};

const json = JSON.stringify(person2, (key, value) => {
  if (key === "password") return undefined;
  return value;
});

console.log(json);

const json2 = '{"date":"2022-03-14"}';
const dateString = JSON.parse(json2);
const dateObject = JSON.parse(json2, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});

console.log(dateString.date instanceof Date); // false
console.log(dateObject.date instanceof Date); // true
