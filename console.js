"use strict" ///// somma dell'array di numeri
const fs = require('fs')
const {Parse, InvalidStringError, EmptyStringError, PartialStringError }= require('./parser');



const arg = process.argv.slice(2);

const fileToRead = arg[0];
const fileToWrite = arg[1]

const data = fs.readFileSync(fileToRead, 'utf8')

let array1 = Parse.parseCSVLine(data);
try {
  
    console.log(data)
  } catch (err) {
    console.error(err)
  } 

console.log(array1);

try {
    fs.writeFileSync(fileToWrite, JSON.stringify(array1))
} catch (error) {
    console.log(error);
}
