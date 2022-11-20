/*
    INSERTION OF A NODE IN DOM:

        Insertion Methods:
            we looked at some ways to insert elements in the DOM
            Here is another way :

            let div = document.createElement('div) // create
            div.className = "allert" // set class
            div.innerHtml = "<span>hello</span>"
            document.body.append(div)

            Here are some Insertion methods:
                * node.append(elem) -> append at the end of Node
                * node.prepend(elem) -> Insert at the begining of the node
                * node.before(elem) -> insert before node
                * node.after(elem) -> insert after node
                * node.replaceWith(elem) -> replace node with the given node


*/ 

let div = document.createElement('div')
div.innerHTML = "<h1>Hello World </h1>"
document.body.append(div)


let div2 = document.createElement('div')
div2.innerHTML = "<h1>Hello World 2 </h1>"
document.body.prepend(div2)