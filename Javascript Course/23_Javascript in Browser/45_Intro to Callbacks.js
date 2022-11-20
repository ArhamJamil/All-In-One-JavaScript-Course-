/*
    Callbacks, Promises, async/await

        Asynchronus actions are the actions that we initiate now and they
        finish later, e.g: setTimeout synchronus actions are the actions that 
        iitiate and finish one-by-one

    Callback Function:
        A callback function is a function passed into another function as an argument
        which is then invoked inside the outer function to complete an action

        here is an example of a callback:
            Function loadSCript(src, callback) {
                let script = document.createElemet('script')
                script.src = src
                script.onload = () => callback(script)
                document.head.append(script)
            }

        A function that does something asynchronously should provide a callback argument where we put 
        the function to run after it is complete
*/ 


// Synchronus Programming
let a = 1
let b = 2
let c = a + b
console.log(c)

// Asynchronus programming
console.log("Start")

setTimeout(function Hello() {
    console.log("Hello Dear !")
},4000)

console.log("End")

// CallBacks:

const loadScript = (src, callback) =>{
    let newScript = document.createElement('script')
    newScript.src = src
    newScript.onload = function () {
        console.log("script loaded = '"+src+"'")
        callback(null, src)
    }
    newScript.onerror = function () {
        console.log("Script not loaded" + src)
        callback(new Error("src got some error while loading ..."))    
    }
    
    document.body.append(newScript)
}

const cb = (error,x) =>{
    if (error) {
        console.log(error)
        return
    }
    alert("Script loaded" + x)
}

loadScript("https://cdn.jsfafafdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", cb)