/*
    ClassName and ClassList:

        if we assign something to elem.className , it replaces
        the whole string of classes, often we want to add / remove / toggle - a single class

        * elem.classList.add/remove("class") -- adds/removes a class
        * elem.classList.toggle("class") - adds the class if it doesnot exist, otherwise removes it
        * elem.classlist.contains("class") - check for the given class , returns true or flase

*/ 

let a = document.getElementById("myName")
console.log(a.classList)
let b = a.classList.add("color-text")
console.log(a.classList)
let c = a.className
console.log(c)

let d = a.classList.contains("color-text")
console.log(d)

