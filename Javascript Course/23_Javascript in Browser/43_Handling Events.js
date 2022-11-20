/*

    addEventListener and removeEventListener:
        addeventlistener is used to assign multiple handler to events

        elem.addEventListener(event, handler)
        elem.removeEventListener(event, hanler) , note ==> handler must be the same functin object for this to work

*/ 

let x = function hi() {
    alert("your name is " + a)
}

let y = function hi1() {
    alert(a + " you are an amazing person")
    
}

let button = document.getElementById("myClickbutton1")
button.addEventListener('click', x)

button.addEventListener('click', y)
let a = prompt("What is your name")
let b = prompt("would you like to remove event listener?")
if (b == "n"){
    button.removeEventListener('click', y)
}