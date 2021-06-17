// NPM module is a simple file
// node js contain module means file

const color = require('cli-color')


// (function(name){

//     console.log(name)


// })('GeekyAsif') //--->  this is used to call the function


// programm structure of node js how the prorgams are wriiten and incapsulated


// (function(exports, module, require,__dirname, __filename){

    // function definition goes here
    // it only run when we call and after end of the fucntion all the variables inside the function are destroyed

// })()

console.log(color.yellow('Geeky Asif'))

// Local Module
// how to create custom module means files 
// we are going to create custom auth.js module 


// const register = require('./auth')
// register("geekyAsig")



// const auth = require('./auth')

// auth.register('Mohammad')
// auth.login('Mohammad')




// core module or inbuilt modules
// http
// os
// path 


// path module :-  it is used to join and resole the folder path url
const path = require('path')

// path.dirname(__) : - it is used to get the full path of the directory
// console.log("folder name: " +  path.dirname(__filename))


// to get the filename
// console.log(" Filename is " + path.basename(__filename))


// Extension
// to get the file extension information
// console.log(" Filename is " + path.extname(__filename))


// Parse :- it used to get all the details of file path name and exteintion etc 
// console.log("Parse :" + path.parse(__filename))


// join :-  it is use to join path of two or more file or folder
// console.log("Parse :" + path.join(__dirname, 'Dirjoin', 'app.js'))


// File Module :-  reading writing file

const fs = require('fs')

// make a Directory
// fs.mkdir(Path to generate folder)
// fs.mkdir(path.join(__dirname, '/test') , (err => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("file created...")

// }))



// To create File
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), "This file is created using writefile command", (err) => {

//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("File is created")
// })



// to append data to same file 
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), "This file is created using writefile command ", (err) => {

//     if(err){
//         console.log(err)
//         return
//     }

//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), "appending text to the same test file using append method", (err) => {
//         if(err){
//             console.log(err)
//         }
//     })

//     console.log("text append to the file .....")
// })


// reading file 
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     const content  = Buffer.from(data)
//     console.log(content.toString())
// })

// another method to read file using utf-8
fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'UTF-8', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
})


// OS MOdule


// event Modules

const Emitter = require('events')

