input = prompt("Enter your number:");
if ((!isNaN(input)) && input >= 10) {
    document.getElementById("card-text").innerHTML= true;
}
else {
    document.getElementById("card-text").innerHTML= false;
}
