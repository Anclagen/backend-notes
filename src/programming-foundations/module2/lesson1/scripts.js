class MenuItem {
  constructor(name) {
    this.name = name;
  }
}

class Pizza extends MenuItem {
  constructor(name, toppings) {
    super(name);
    this.toppings = toppings;
  }
}

class Pasta extends MenuItem {
  constructor(name, isVegetarian) {
    super(name);
    this.isVegetarian = isVegetarian;
  }
}

class Panckake extends MenuItem {
  constructor(name, isSweet) {
    super(name);
    this.isSweet = isSweet;
  }
}
