for (let i=1; i<=100; i++){
    if (i%3===0 && i%5===0){
        document.getElementById("card-text").innerHTML += "FizzBuzz" + "<br>";
    }
    else if (i%3===0){
        document.getElementById("card-text").innerHTML += "Fizz" + "<br>";
    }
    else if (i%5===0){
        document.getElementById("card-text").innerHTML += "Buzz" + "<br>";
    }
    else {
        document.getElementById("card-text").innerHTML += i + "<br>";
    }
}