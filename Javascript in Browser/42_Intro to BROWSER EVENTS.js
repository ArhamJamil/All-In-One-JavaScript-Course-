/*
     
    What are Events?
        Browser events is a SIgnal that something has happened
        all DOM nodes generate such signal

        Important DOM events are :
            Mouse events : click,contextmenu(right click), mouseover/mouseout,mousedown/mouseup,mousemove
            keyboard events : keydown keyup
            form elem events : sumbit , focus
            Document events: DOMContentLOaded

*/ 

let a = document.getElementById("myClickbutton1")
a.onclick = function hellow() {
    let b = prompt("hello arham write")
    a.innerHTML = b
}