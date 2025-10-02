document.getElementById("card-text").innerHTML =
`<button onclick="square()">square</button>
<button onclick="triangle()">triangle</button>`

function square() {
    let n = prompt("Enter num:");
    for (let i = 0; i < num; i++) {
        document.getElementById("card-text").innerHTML += n + "<br>";
        n += "#";    
    }
}
function triangle() {
    let n = prompt("Enter num:");
    for (let i = num; i >= 1; i--) {
        document.getElementById("card-text").innerHTML += n + "<br>";
        n -= "#";    
    }
}