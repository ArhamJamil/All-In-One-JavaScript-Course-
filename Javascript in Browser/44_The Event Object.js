/*
    The Event Object:
        when an event happens the browser creates an event object
        puts details in it and passes it as an argument to the handler

        elem.onclick = function(event){
            ...................
        }
        event.type = > Event type
        event.currentTarget = > Element that handled the event
        event.clientX / event.clientY = > Coordinates of cursor
*/ 

let x = function hi(e) {
    console.log(e.target)
    console.log(e)
    console.log(e.type)
    console.log(e.currentTarget)
    alert("your name is " + a)
}


let button = document.getElementById("myClickbutton1")
button.addEventListener('click', x)
let a = prompt("What is your name")
