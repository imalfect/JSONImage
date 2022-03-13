
let filename = './json/relax.json'
let readfrom = './pngs/watever.png'

const Jimp = require('jimp');
const fs = require('fs');
let result = {}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }




Jimp.read(readfrom, (err,image) => {

result.width = image.getWidth()
result.height = image.getHeight()
result.pixels = []
for (const h of Array(result.height).keys()) {
    for (const i of Array(result.width).keys()) {
        let x = image.getPixelColour(i,h)
        let a = Jimp.intToRGBA(x)
        result.pixels.push(RGBToHex(a.r,a.g,a.b))

    }
}
let data = JSON.stringify(result)
fs.writeFileSync(filename,data)
console.log(`Saved to ${filename}, check it out!`)
})