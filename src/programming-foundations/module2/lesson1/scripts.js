class MenuItem {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  set newPrice(price) {
    this.#price = price;
  }
}

class Pizza extends MenuItem {
  #toppings;

  constructor(name, price, toppings) {
    super(name, price);
    this.#toppings = toppings;
  }

  get toppings() {
    return this.#toppings;
  }
}

class Pasta extends MenuItem {
  #isVegetarian;
  constructor(name, price, isVegetarian) {
    super(name, price);
    this.#isVegetarian = isVegetarian;
  }

  get isVegetarian() {
    return this.#isVegetarian;
  }
}

class Pancake extends MenuItem {
  #isSweet;
  constructor(name, price, isSweet) {
    super(name, price);
    this.#isSweet = isSweet;
  }

  get isSweet() {
    return this.#isSweet;
  }
}

// Creating instances
const pizza = new Pizza("Margherita", 10.99, ["tomato", "mozzarella"]);
const pasta = new Pasta("Spaghetti Carbonara", 7.99, false);
const pancake = new Pancake("Blueberry", 5.99, true);

// Logging to console
console.log(pizza);
console.log(pasta);
console.log(pancake);

console.log("Pizza:", "\n", "name:", pizza.name, "\n", "price:", pizza.price, "\n", "Toppings:", pizza.toppings);
//user ` instead of " to use template literals
console.log(`Pizza:\nname: ${pizza.name}\nprice: ${pizza.price}\nToppings: ${pizza.toppings.join(", ")}`);
console.log("Pasta:", "\n", "name:", pasta.name, "\n", "price:", pasta.price, "\n", "Is Vegetarian:", pasta.isVegetarian);
console.log("Pancake:", "\n", "name:", pancake.name, "\n", "price:", pancake.price, "\n", "Is Sweet:", pancake.isSweet);
pizza.newPrice = 12.99;
console.log(pizza.price); // 12.99
