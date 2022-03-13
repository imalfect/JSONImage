

// DEV MODE
let dev = false


// Declares

let filename = './pngs/whatever.png'
let readfrom = './json/relax.json'
const { createCanvas } = require("canvas");
const fs = require("fs");
const jsi = require(readfrom)
const width = jsi.width
const height = jsi.height
// Checks
let expected = width * height
if (expected != jsi.pixels.length) {
    console.log(`Warning! Pixels in the .jsi file not equal to expected, declared by the width and height! Expected ${expected}, but got ${jsi.pixels.length}`)
    if (dev === true) {
        console.log("Ignoring the warning, developer mode is on.")

    } else {
        console.log("Closing the program, to continue enable developer mode.")
        process.abort()
    }

}
const canvas = createCanvas(width,height)
const context = canvas.getContext("2d")





let x = 0
let y = 0
for (const color of jsi.pixels) {
    context.fillStyle = '#' + color
    context.fillRect(x,y,1,1)
    x = x + 1
    if (x === width) {
        x = 0;
        y = y + 1
    }
}
const buffer = canvas.toBuffer("image/png")
fs.writeFileSync(filename,buffer)
console.log(`Finished, check ${filename}.png`)

