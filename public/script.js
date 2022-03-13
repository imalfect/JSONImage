
let doc;

document.getElementById('inputfile')
.addEventListener('change', function() {

var fr=new FileReader();
            fr.onload=function(){
                loadJSIa(fr.result)
            }
            fr.readAsText(this.files[0]);
})
function loadJSI() {
    let res = JSON.parse(document.getElementById('mistake').value)
    let canvas = document.createElement('canvas')
    canvas.id = 'result'
    canvas.width = res.width
    canvas.height = res.height
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    var ctx = canvas.getContext("2d");



    let x = 0
    let y = 0
    for (const color of res.pixels) {
        ctx.fillStyle = color
        ctx.fillRect(x,y,1,1)
        x = x + 1
        if (x === res.width) {
            x = 0;
            y = y + 1
        }
    }






}


function loadJSIa(json) {
    let res = JSON.parse(json)
    let canvas = document.createElement('canvas')
    canvas.id = 'result'
    canvas.width = res.width
    canvas.height = res.height
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    var ctx = canvas.getContext("2d");



    let x = 0
    let y = 0
    for (const color of res.pixels) {
        ctx.fillStyle = color
        ctx.fillRect(x,y,1,1)
        x = x + 1
        if (x === res.width) {
            x = 0;
            y = y + 1
        }
    }






}