"use strict" ///// somma dell'array di numeri
const fs = require('fs');
const { json } = require('stream/consumers');
const {Parse}= require('./parser.js');



const arg = process.argv.slice(2);

const fileToRead = arg[0];
const fileToWrite = arg[1]

fs.readFile(fileToRead, 'utf8',(error,data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    let array5 = Parse.parserAll(data);
    const json = JSON.stringify(array5);
    writeFileAsync(json);
  }
})
function  writeFileAsync(json){
  fs.writeFile(fileToWrite, json, error =>{
    if (error){
      console.log(error);
    }else{
      console.log('bella storia !!!!!!!!!');
    }
  })
}


// let array1 = Parse.parseCSVLine(data);
// try {
//   const data = fs.readFileSync(fileToRead, 'utf8')
//     console.log(data)
//   } catch (err) {
//     console.error(err)
//   } 

// console.log(array1);

// try {
//     fs.writeFileSync(fileToWrite, JSON.stringify(array1))
// } catch (error) {
//     console.log(error);
// }



console.log("ho già letto?");
