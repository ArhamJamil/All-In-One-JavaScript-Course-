/*
    What is AJAX ?
        Ajax stands for asynchronus Javascript and XML, it is not programming laguage but
        set of existing technologies, it helps in fetching dat asynchronously without interfering page, 
        no page reload/refresh , Modern websites uses JSON instead or XML for data transfer

    Why Use Ajax :
        * No page reload/refresh
        * Better User Experience 
        * saves NEtwork bandwith
        * Very Interactive
    
    How AJAX woks : 
        * Ajax uses XMLHttpRequest object also called XHR object to achieve this
        * Modern websites use JSON instead or XML for data transfer
        * Data can be transfered in any format and protocol (Not always HTTPS necessarily)
*/ 


let fetchBtn = document.getElementById('FetchDataBtn')
fetchBtn.addEventListener('click', clickHandler)

let httpStatusSuccessCode = 200
let httpStatusErrorCode = 404

function clickHandler() {
    console.log("You have clicked the fetch button!!!!")

    // Making an XHR object :
    const XHR = new XMLHttpRequest()

    // Open the Object
    XHR.open('GET', 'https://jsonplaceholder.typicode.com/users', true )

    // What to Do on progress (optional)
    XHR.onprogress = function () {
        console.log('on progress')

    }
    // What to do when response is Ready
    XHR.onload = function() {
        // if (this.status === httpStatusSuccessCode) {
        //     console.log(this.responseText)
        // }
        // else{
        //     console.log("some error occured ")
        // }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.status === httpStatusSuccessCode) {
                    console.log(this.responseText)
                    resolve(httpStatusSuccessCode)
                }
                else{
                    reject()
                }
            }, 2000);           
        }).then(function(reason){
            console.log("Thanks for resolving, Reason: " + reason)
        }).catch(function(error){
            console.log("Some error has been occured : " + error)
        })
    }
    
    
    // send the request
    XHR.send()
}

let resultsBtn = document.getElementById('resultDataBtn')
resultsBtn.addEventListener('click', ResultHandler)

function ResultHandler() {
    console.log("you have clicked sjow result button")
    console.log("You have clicked the fetch button!!!!")

    // Making an XHR object :
    const XHR = new XMLHttpRequest()

    // Open the Object
    XHR.open('GET', 'https://jsonplaceholder.typicode.com/users', true )

 
    // What to do when response is Ready
    XHR.onload = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.status === httpStatusSuccessCode) {
                    
                    let obj = JSON.parse(this.responseText)
                    console.log(obj)
                    
                    let list = document.getElementById('list')
                    let data = ""
                    
                    for (let index = 0; index < obj.length; index++) {
                        console.log(obj[index].name)
                        
                        data += `<li>${obj[index].name} with ID = " ${obj[index].id} " </li>`
                        
                    }
                    list.innerHTML = data
                    resolve(httpStatusSuccessCode)
                }
                else{
                    reject()
                }
            }, 2000);           
        }).then(function(reason){
            console.log("Thanks for resolving, Reason: " + reason)
            
        }).catch(function(error){
            console.log("Some error has been occured : " + error)
        })
    }
    
    
    // send the request
    XHR.send()
}