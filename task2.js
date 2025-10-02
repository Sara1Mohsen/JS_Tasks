document.getElementById("card-text").innerHTML = 
`<input type= "text" 
id='num1'
placeholder="Enter first number"> 
<select name="operation" id="operation">
<option value='sum'>+</option>
<option value='sub'>-</option>
<option value='mul'>*</option>
<option value='div'>/</option>
</select>
<input type= "text"
id='num2'
placeholder="Enter second number">
<button onclick="calculate()"> result </button>`;
// button.addEventListener("click", calculate);

function calculate(){
    const x = Number(document.getElementById("num1").value);
    const y = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch(operation){
        case 'sum':
            result = x + y ;
            break;
        case 'sub':
            result = x - y ;
            break;
        case 'mul':
            result= x * y ;
            break;
        case 'div':
            result = x / y ;
            break;
    }
 document.getElementById("card-text").innerHTML = "Result: " + result;
}