// Local modules
// const {add, a }= require("./local-1")
// const {add:add2, a:a2 }= require("./local-2")

// console.log(add2(a2, a2, a2));


// built in modules

const fs = require("fs")

const readtext = fs.readFileSync("./text/bot.txt", "utf-8")
console.log(readtext);