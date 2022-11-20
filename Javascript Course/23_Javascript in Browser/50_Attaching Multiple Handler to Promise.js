

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("hey iam resolved")
        resolve(1)
    }, 2000);
})
p1.then(()=>{
    console.log("Congrats this promise is resolved")
})
p1.then(()=>{
    console.log("Hurray")
})