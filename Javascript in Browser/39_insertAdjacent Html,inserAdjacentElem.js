/*
    insertAdjacentHtml\text\Element:
        this method is used to insert html , the first parameter is a code
        word specifying where to insert , Must be one of the following:

        * "beforebegin" -- Insert html immediately before elemnent
        * "afterbegin" -- insert html into element at the begining 
        * "beforeend" -- insert html into element at the end
        *  "afterend" -- insert html immediately after element

*/ 

let a = document.getElementById("myName")
a.insertAdjacentHTML("afterend" , "<p> my name is jamil</p>")
a.insertAdjacentHTML("afterbegin" , "<p> my name is fatima</p>")
a.insertAdjacentHTML("beforeend" , "<p> my name is sabih</p>")
a.insertAdjacentHTML("beforebegin" , "<p> my name is rija</p>")