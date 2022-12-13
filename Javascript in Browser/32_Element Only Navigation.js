/*
    ELEMENT ONLY NAVIGATION:
        Sometimes we dont want text or comment nodes, Some links only
        take Element nodes into account for example:

        * document.previousElementSibling --> previous sibling which is element
        * document.nextElementSibling --> next sibling(elemnent)
        * document.firstElementCHild --> first element child
        * document.lastElementchild -> last Element child
        * 

*/ 

const ChangeStyle=()=>{
    document.body.firstElementChild.firstElementChild.style.background="red"}

let b = document.body
console.log("First child of B is: ", b.firstChild)
console.log("First Element child of B is: ", b.firstElementChild)
ChangeStyle()