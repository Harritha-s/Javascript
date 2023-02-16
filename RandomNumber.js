const prompt = require('prompt-sync')();

let min = parseInt(prompt('Enter a min value '));
let max = parseInt(prompt('Enter max Value '));

let a = Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Random value between ' + min + ' and ' + max + ' is ' + a );
