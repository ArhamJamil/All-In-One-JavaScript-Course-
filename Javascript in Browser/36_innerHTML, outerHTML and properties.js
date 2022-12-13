/*
        Events and DOM Properties:
        
            innnerHTML and outerHTML:
                * The innerHTML property allows to get HTML inside the element as a string -- ONLY VALID FOR ELEMENT NODES
                * The outerHtml property contains the ful HTML and InnerHTML + the ELEMENTS itself
                * innerHTML is valid for Element nodes, for any other nodes type we can use nodeValue or data
*/ 

let a = document.getElementById("id1")
let b = a.innerHTML
let c = a.outerHTML

console.log(b)

console.log(b = "<div>hello</div>")

console.log(c)

console.log(c = "<div><p>Card</p></div>")