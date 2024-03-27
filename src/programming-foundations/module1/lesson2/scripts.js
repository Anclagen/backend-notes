let text = 'My favourite book is "Harry Potter". I love this book so much.';

let resultText1 = text.slice(3, 27);
console.log(resultText1); // favourite book is “Harry Potter”

let resultText2 = text.slice(0, 3) + text.slice(13, 21) + text.slice(39, 43) + text.slice(61, 62);
console.log(resultText2); // My book is love.

let resultText3 = text.slice(0, 3) + text.slice(13, 21) + text.slice(21, 35).toUpperCase() + text.slice(61, 62);
console.log(resultText3); // My book is “HARRY POTTER”.

let resultText4 = text.slice(28, 34).toLowerCase() + text.slice(2, 3) + text.slice(22, 27).toLowerCase();
console.log(resultText4); // potter harry
