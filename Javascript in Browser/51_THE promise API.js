/*
    The Promise API :
        there are 6 static methods of Promise class:

        * Promise.all(promises) -> waits for all promises to reslove and returns the array of the results
                                    if any fails it becomes the error and all results are ignored

        * Promise.allSettled(promises) -> waits for the promise to settle and returns their results as an aaray of objects with status and value
        
        * Promise.race(promises) -> waits for the first promise to settle and its results/error becomes the output

        * Promise.any(promises) -> wait for the first promise to fulfill (not rejected) and its results becomes
                                    the outcomes , throws aggregate error if all the promises are rejected

        * Promise.resolve(value) -> makes a relsoved promise with given value
        
        * Promise.reject(error) -> makes a rejected promise with the given error

*/ 


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
        // reject(new Error("eror 404"))
    }, 3000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2")
        // reject(new Error("eror 404"))
    }, 2000);
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
        // reject(new Error("eror 404"))
    }, 1000);
})

// promise1.then((value)=>{
//     console.log(value)
// })

// promise2.then((value)=>{
//     console.log(value)
// })

// promise3.then((value)=>{
//     console.log(value)
// })

// let promise_handler = Promise.all([promise1,promise2,promise3])
// let promise_handler = Promise.allSettled([promise1,promise2,promise3])
// let promise_handler = Promise.race([promise1,promise2,promise3])
let promise_handler = Promise.any([promise1,promise2,promise3])
// let promise_handler = Promise.race([promise1,promise2,promise3])
promise_handler.then((value)=>{
    console.log(value)
})