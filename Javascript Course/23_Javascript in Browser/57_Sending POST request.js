/*
    POST request:
        To make a POST request, we need to use fetch options
        1- method -> HHTP-method e.g POST
        2- body -> the request body
        
        let response = await fetch('URL', {
            method: 'POST'
            headers:{
                'Contenet Type': 'applicaton'
            }
            body: '{"A":"Arham"}'
        })

        let result = await response.json()

*/
const CreateToDo = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Arham",
      body: "Full stack developer",
      userId: 1,
    }),
  };
  let promise = await fetch(
    'https://jsonplaceholder.typicode.com/posts',options
  );
  let response = await promise.json();
//   console.log(response)
  return response;
};

const myFunc = async () => {
  let todo = await CreateToDo();
  console.log(todo);
};
myFunc();
