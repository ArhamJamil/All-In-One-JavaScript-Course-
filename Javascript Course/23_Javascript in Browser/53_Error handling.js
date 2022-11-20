/*
    Error Handling : try & catch:
        we all make mistakes alosi sometimes our script can have errors
        usually a program halts when an error occurs

        The try... and catch syntax allows us to catch error so that the script instead of dying can do something more reasonabhle

        the try...catch syntax:
            Try Catch has two main blocks

            try{
                // try the code
            } catch(err){
                // error handling
            }
        
        first the code in try is executed , if there is no error catch is ignored , else catch is executed
        
        The try catch works Synchronusly, if an exception happens in scheduled code like in setTimeout , then try catch wont work it:
        try{
            setTimeout(function(){
                // error code -> cript dies and catch won work
            })
        }catch(err){

        }

        that because the function itself is executed later when the engine has already left the try catch contruct

*/ 
setTimeout(() => {
    console.log("hacking wifi ...")
}, 2000);


setTimeout(() => {
    console.log("Fetching  Username and password ...")
}, 4000);

try {
console.log(arham)    // wait for the rror to hanlde
} catch (error) {
    console.log(error) // just console the eror and run other script
}

try {
    setTimeout(() => {
        console.log(meraError)   
    }, 123);
    
    } catch (error) {
        console.log(error) // just console the eror and run other script
    }
    


setTimeout(() => {
    console.log("Username and password is fetched ...")
}, 6000);

