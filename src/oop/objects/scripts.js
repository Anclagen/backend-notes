const myObject = {
  name: "Bob",
  age: 20,
  measurements: {
    height: 189,
    weight: 90,
  },
  setStatus: function (status) {
    this.myStatus = status;
  },
  getStatus: function () {
    return this.myStatus;
  },
};

class MyClass {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.measurements = {
      height: height,
      weight: weight,
    };
  }

  setStatus(status) {
    this.myStatus = status;
  }

  get getStatus() {
    return this.myStatus;
  }
}

const myInstance = new MyClass("Alice", 25, 170, 60);

function Person(name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.measurements = {
    height: height,
    weight: weight,
  };

  this.setStatus = function (status) {
    this.myStatus = status;
  };

  this.getStatus = function () {
    return this.myStatus;
  };
}

const myPerson = new Person("Alice", 25, 170, 60);

console.log(myObject);
console.log(myInstance);
myInstance.setStatus("Alive");
console.log(myInstance.getStatus);
console.log(myPerson);

// Inheritance
function Employee(name, age, height, weight, jobTitle) {
  Person.call(this, name, age, height, weight);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getJobTitle = function () {
  return this.jobTitle;
};

const myEmployee = new Employee("Alice", 25, 170, 60, "Developer");
myEmployee.setStatus("Alive");
console.log(myEmployee);

const myObject2 = {
  name: "Alice",
  age: 25,
  height: 170,
  weight: 60,
};

for (const key in myObject2) {
  console.log(key, myObject2[key]);
}

numbers = {};
numbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 2;
      if (n == 10) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};
console.log(numbers);
console.log([...numbers]);
for (const num of numbers) {
  console.log(num);
}

const myObject3 = {
  name: "Alice",
  age: 25,
  height: 170,

  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let index = 0;

    return {
      next: () => {
        if (index < keys.length) {
          return {
            done: false,
            value: this[keys[index++]],
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (const value of myObject3) {
  console.log(value);
}
//Lesson task
const obj = {
  value1: 1,
  value2: 2,
  sum: function () {
    console.log(this.value1 + this.value2);
  },
  multiplication: function () {
    console.log(this.value1 * this.value2);
  },
};

class Obj {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  sum() {
    console.log(this.value1 + this.value2);
  }
  multiplication() {
    console.log(this.value1 * this.value2);
  }
}

function ObjFunc(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
  this.sum = function () {
    console.log(this.value1 + this.value2);
  };
  this.multiplication = function () {
    console.log(this.value1 * this.value2);
  };
}
