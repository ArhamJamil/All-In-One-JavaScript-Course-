/*
    MATCHES , CLOSEST & CONTAINS METHODS :
        there are three important methods to search the DOM

            * element.matches(css) -> To check if elem matches the given CSS selector
            * element.Closest(css) -> To look for the nearest ancestor that matches the given css selector , The element itself is also checked
            * element.contains(elem) -> Returns tru if elemB is inside elemA(a descendent of elemA) or when elemA = = elemB

*/ 

let id1 = document.getElementById("id1")
let id2 = document.getElementById("id2")

console.log(id1)

console.log(id1.matches(".class"))
console.log(id1.matches(".card-text"))
console.log(id1.contains(id2))
console.log(id2.contains(id1))