const kelvin = 0; // This is a kelvin value
const celsius = kelvin + 273; // This is a celsius value
let fahrenheit = celsius *(9 / 5) +32; // Convert to celsius
fahrenheit = Math.floor(fahrenheit); // Round down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.` );

let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
