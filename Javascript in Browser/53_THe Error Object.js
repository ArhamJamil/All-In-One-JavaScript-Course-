/*
    The error Object:
        for all built in error the error object has two main properties:

        try{
            hey;// error variable not defined
        } catch(err){
            alert(err.name)
            alert(err.message)
            alert(err.stack)
        }

        Throwing custom error:
            we can throw own error by using the throw object:
                if(age>180){
                    throw new Error("first initilised age")
                }
            we can also throw a particular error by using the built in constructor for standard error:

            let error = newSyntaxError(message) or newReferenceError(message)
*/

try {
  console.log(bababa);
  
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
}
try {
    let age = prompt("enter your age ");
    age = Number.parseInt(age);

    if (age > 120) {
      throw new ReferenceError("this is not true");
    }
  } catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
  }
console.log("the script is still running");
