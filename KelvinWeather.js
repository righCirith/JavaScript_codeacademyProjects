


/* this program is a converter from Kelvin to Celcius and Fahrenheit, and Celcius to Newton (Kelvin should be changed)
*/
// Numbers are rounded

// today's forecast in Kelvin
const Kelvin = 0;

// Kelvin converted to Celcius
let Celcius = Kelvin - 273;

// Celcius converted to Fahrenheit
let Fahrenheit = Celcius * (9/5) + 32;

// Fahrenheit rounded
Fahrenheit = Math.round(Fahrenheit);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

//Celcius converted to Newton
Newton = Celcius * (33/100) ;

//Newton rounded
Newton = Math.round(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);