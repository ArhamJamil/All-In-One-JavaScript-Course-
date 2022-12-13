/*
    Q1: write a program to load a javascript file in browser using PROMISES
        Use .then() to display an alert when the load is complete

    Q2: Write the same program from previous Question and use async / await Syntax

    Q3: Create a promise which rejct after 3 secs use async / await to get its value , use 
        try cath to handle its error
    
    Q4: Write a program using promise.all() inside an async / await to await 3 promises
        compare its results with the case where we await three promises one bye one
*/

// Solution 1:

// const loadMyScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let myScript = document.createElement("script")
//         myScript.src = src
//         myScript.onload = () => {
//             resolve(src + "Script Sucessfully Loaded . . .")
//         }
//         document.body.append(myScript)
//     })

// }
// let a = loadMyScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     alert(value)
//     console.log(value)
// })

// Solution 2
// const app = async () =>{
//      let a = await loadMyScript ("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
//      console.log(a)
//      alert(a)
//  }
// app()

// Solution 3 

let rejctPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("Please this is not acceptable"))
    }, 3000)
})
 const app = async () =>{
      try {
        let x = await rejctPromise
        console.log(x)
      } catch (error) {
        console.log("error 404")
      }
  }
app()