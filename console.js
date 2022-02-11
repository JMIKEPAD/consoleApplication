"use strict" ///// somma dell'array di numeri
const fs = require('fs');
const {ParseV2}= require('./parserV2.js');

// fs.writeFile(fileToWrite, json, error =>{
//       if (error){
//         console.log(error);
//       }else{
//         console.log('bella storia !!!!!!!!!');
//       }
//     })
  

const arg = process.argv.slice(2);

const fileToRead = arg[0];
const fileToWrite = arg[1];
// const outputType = arg [2];
// fs.readFile(fileToRead, 'utf8',(error,data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//     let array5 = ParseV2.parseToObject(data);
//     const json = JSON.stringify(array5);
//     writeFileAsync(json);
//   }
// })
// function  writeFileAsync(json){
//   fs.writeFile(fileToWrite, json, error =>{
//     if (error){
//       console.log(error);
//     }else{
//       console.log('bella storia !!!!!!!!!');
//     }
//   })
// }

let array1 = [];

try {
  const data = fs.readFileSync(fileToRead, 'utf8')
  array1 = ParseV2.parseToObject(data);
    console.log(array1)
  } catch (err) {
    console.error(err)
  } 

// console.log(array1);

try {
    fs.writeFileSync(fileToWrite, JSON.stringify(array1))
} catch (error) {
    console.log(error);
}



console.log("ho già letto?");
