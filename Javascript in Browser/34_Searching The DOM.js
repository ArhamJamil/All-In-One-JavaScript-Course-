/*
    SEARCHING THE DOM:
        DOM interigation properties are helpful when the elements are close to each other,
        If they are not close to eachother we have some methods to search DOM

        * document.getElementByID:
            this method is used to get element with a given "id" attribute

            let span = document.getELementByID('span)
            span.style.color = "red"
*/ 

let C_titleId = document.getElementById("card1text")
C_titleId.style.color = "red"

let C_title = document.querySelectorAll(".card-title")
C_title[0].style.color = "blue"
C_title[1].style.color = "red"
C_title[2].style.color = "green"

let cardtitletext = document.getElementsByClassName("card-text")
cardtitletext[1].style.color = "blue"




// change card title to red

// let cardtitle = document.getElementsByClassName("card-title")[0]
// cardtitle.style.color = "red"