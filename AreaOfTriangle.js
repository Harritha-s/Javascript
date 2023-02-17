const prompt = require('prompt-sync')();

const base = prompt('Enter the base value: ');
const height = prompt('Enter the height value: ');

const area = (base * height)/2;

console.log('The area of triangle is ' + area);
