input = prompt("Enter your age");

if ((!isNaN(input)) && input < 13) {
    document.getElementById("card-text").innerHTML= "Child";
}
else if((!isNaN(input)) && (input >= 13) && (input <= 19 )){

    document.getElementById("card-text").innerHTML= "Teenager";
}
else if ((!isNaN(input)) && (input > 19)) {
    document.getElementById("card-text").innerHTML= "Adult";
}
