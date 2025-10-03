document.getElementById("card-text").innerHTML =
`<button onclick="square()">square</button>
<button onclick="triangle()">triangle</button>`

function square() {
    let n = prompt("Enter num:");
    let shape = "";
    let stars   = "*";
    for (let i = 0; i < n; i++) {
        document.getElementById("card-text").innerHTML += n + "<br>";
        n += "#";    
    }
}
function triangle() {
    let n = prompt("Enter num:");
    for (let i = n; i >= 1; i--) {
        document.getElementById("card-text").innerHTML += n + "<br>";
        n -= "#";    
    }
}