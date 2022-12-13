/*
    Introduction to Promises:
        The solution to the callback hell is Promises.
        A promise is a , promise of execution , the code either executes or fails in both cases the
        subscriber will be notified

    Synxtax:
        let promise = new PRomise(function(resolve, reject){
            // executor
        })
        reslove and reject are two call backs provided by the javascript itself , they are called like this:
        relsove(val) - if job successfully finished
        reject (val) - if job not finished
*/ 

// let myPromise = new Promise((resolve, reject) => {
//     console.log("hello prmoise wala")
//     resolve(56)
// })

// console.log("hello")
// setTimeout(function () {
//     console.log("another hello")
// },5000)
// console.log("My name is Arham")
// console.log(myPromise)

const func1 = ()=>{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let error = false
            if (!error) {
                console.log('Function : Your promise has been resloved')
                resolve(45)
            }
            else{
                console.log('Functon : Your promise has been rejected')
                reject('sorry not fulfilled !')
            }
        }, 3000);
    })
}

func1().then(function(reason){
    console.log("Thanks for resolving, Reason: " + reason)
}).catch(function(error){
    console.log("Very bad bro, Reason: " + error)
})