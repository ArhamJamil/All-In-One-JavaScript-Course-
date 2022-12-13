/*
    resolve(value) -> if the job is finished sucessfully
    reject(error) -> if the job fails

    The promise object returned by the new Promise constructor has these properties:
    * state: initially pending then changes to either "fulfilled" when reslove is called
                or "rejected" when the reject is called
    * result : initially undefined , then changes to value if resloved or error whn rejected 
    

    Consumers: (.then() & .catch() ):
        The consuming code can recieve the first result of apromise throgh then and catch
        The most fundamental one is then:
            promise.then(funtion(result){
                handle
            },function(error){
                handle
            })

*/ 





let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending . . . .")
    setTimeout(() => {
        console.log("i am a promise and Fullfiled")
        resolve(true)
    }, 4000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending . . . .")
    setTimeout(() => {
        console.log("i am a promise and rejected")
        reject(new Error("p2 rejected"))
    }, 4000);
})

p1.then((value)=>{
    console.log(value)
})

// p2.then((value)=>{
//     console.log(value)
// })

p2.catch(
    (Error)=>{
        console.log(Error)
    }
)