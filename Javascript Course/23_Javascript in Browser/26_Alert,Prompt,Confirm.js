alert("Enter the Value of a")
let a = prompt("Enter value here", 0)
document.write(a+" "+ typeof(a)+"\n") // display value to html page
let b = parseInt(a)
document.write(b+" "+ typeof(b))

let write = confirm("Do you want to write it to page")
if (write) {
    document.write(a)
}
else{
    document.write(" plz allow me to write")
}