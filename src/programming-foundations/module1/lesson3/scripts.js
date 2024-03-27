let x = parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));
let z = promt();
const checkX = (x) => {
  if (1 >= x > 0.5) {
    alert("Hello, it's nice to see you here.");
  } else if (0.5 >= x > 0) {
    alert(x);
  } else {
    return false;
  }
  return true;
};

if (!checkX(x)) {
  x = parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));
  if (!checkX(x)) {
    alert("Your data is not correct!");
  }
}
