/*
        WINDOW Object BOM & DOM:

            --> window object represnt browser window and provides menthods
                to control it. It is a Global Object
            
            --> Document Object Model:
                Dom represent the page content as Html

                document.body -> Page body as Js object
                document.body.style.background = "black" -> change page background to black
            
            --> Browser Object Model (BOM):
                The object model reprent additional objects provided by the browser(host environment)
                for working with everything except the document    

                The function alert/comfirm/prompt are also part of BOM

                location.href = "https://www.google.com" -> redirect to another URL

    */ 
console.log(document)
console.log(document.body)
document.body.style.background = "green"