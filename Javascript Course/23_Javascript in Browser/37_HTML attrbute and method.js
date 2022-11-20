/*
        Html attribute and Methods: 
            * elem.hasAtrribute(name) --> methodto check for existence of an attribute 
            * elem.getAttribute(name --> method used to get value of attribute
            * elem.setAttribute(name,value) --> method used to set value of an attribute
            * elem.removeAtrribute(name) --> metthod to remove the attribute from the elem
            * elem.attributes --> method to get the collection of all attributes
            
        (data-) attributes:
                we can always create a custom attribute but the ones starting 
                with `data` are reserved for programmmers use they are available in a property name dataset
                If an element has an atribute named "data-one":
                    it is availaible as element.dataset.one
*/ 

let a = document.getElementById("myName")
console.log(a)

let b = a.getAttribute("class")
console.log(b)

let c = a.hasAttribute("class")
console.log(c)

a.setAttribute("class", "meriNamekiclass anotherclass")
// a.removeAttribute("class")

console.log(a.attributes)

let myData = a.dataset // return as object
console.log(myData)
console.log(myData.name)
console.log(myData.father)