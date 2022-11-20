/*
    FETCH API:
        when we have to send dat to server , or pull dat afrom server  we use fetch api

        fetch is used to get data over the network

        let pomise = fetch(url , [options]) -- without optios, a GET request is sent
        getting a response is 2 stage process:

            An object of response class containing "status" | "ok" properties
            Status == the https status code , e.g = 200
            ok == boolean true if http code is 200

            After that we need to call another method to access the body in digital formats:
            response.text() = read and returns the text
            response.json() = pss the response as JSon

            other methods include res.formData(), res.blob, res.arraybuffer() etc..
            
*/ 

let promise = fetch("https://goweather.herokuapp.com/weather/ny")
promise.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
})