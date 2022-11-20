/*
    CHILDREN OF AN ELEMENT:

        * Direct as well as deeply nested element of an element are called its children
        * Child Nodes --> Elements that are direct children {for e.g: head & body are children of <html>}
        * Decendent Nodes --> All nested elements, childrens, their children and so on ...
        
    firstChild, lastChild & childeNodes:
        
        * elemENT.firstChild => first child element
        * element.lastChild => last child element
        * element.childNodes => All child Nodes

*/ 

console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

let arr = Array.from(document.body.childNodes)
console.log(arr)