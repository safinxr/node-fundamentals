const EventEmiter = require("events")

const myEmiter = new EventEmiter()

myEmiter.on("birthday", ()=>{
    console.log("happy birthday");
})
myEmiter.on("birthday", ()=>{
    console.log("nboooooo");
})


myEmiter.emit("birthday")