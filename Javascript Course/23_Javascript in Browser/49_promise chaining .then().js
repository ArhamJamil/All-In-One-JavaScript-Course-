/*
    We can chain promises and make them pass the resolved values to one another 

    p.then(function(result)=>{
        alert(result)
        reslove
    }).then()...

    The idea is to pass the result through the cahin of handlers
*/ 

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resloved after 2s ")
        resolve(true)
    }, 4000);
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2 resolved")            
        }, 3000)
    
    })
    return p2
}).then((value)=>{
    console.log("we are done")
})