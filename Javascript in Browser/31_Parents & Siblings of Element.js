/*
    Notes On DOM COLLECTION:
        * They are Read_only
        * They are live, element.childNodes variable(reference) will automatically update if childNodes of element is changed
        * They are iterable using For....Of...loop

    SIBLING & PARENT:

        --> Sibling are nodes that are children of the same parent
            e.g: <head> and <body> are siblings bcz they are of same parenr that is <html

            <body> is said to be the "next" or "right" sibling of <head>, 
            <head> is said to be the "previous" or "left" sibling of the <body>

        --> The next sibling is in nextSibling property, and the previous are in previousSibling

*/ 

console.log(document.body.firstChild.firstChild)
let a = document.body.firstChild.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
