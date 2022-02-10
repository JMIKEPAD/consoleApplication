"use strict"
const fs = require('fs');

const {Parse, InvalidStringError, EmptyStringError, PartialStringError }= require('./parser');

const stringToParse = "12; 13; 45; 23\n; 2.1; 13; 34; 21\n; 3.2; 12; 4; 22";

let array1 = Parse.parseCSVLine(stringToParse);

console.log(array1);
