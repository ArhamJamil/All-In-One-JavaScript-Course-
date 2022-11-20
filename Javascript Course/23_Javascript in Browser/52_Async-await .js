/*
    There is a special syntax to work with promises in javascript

    a function can be made async by using async keyword

    async function arham(){
        return x
    }

    An async function always returns a promise, other values are wrapped automatically
    like this:
        arham().then(alert)
        so async ensures that function returns a prmoise and wraps promise in it
*/

// const arham = async () => {
//   return 5;
// };
// arham().then((x) => {
//   alert(x);
// });

const weatherHandle = async () => {
  let karachiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 2000);
  });

  let lahoreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 3000);
  });
  // karachiWeather.then(alert)
//lahoreWeather(alert)

  console.log("Fetching karachi weather please wait ...")
  let khi_W = await karachiWeather
  console.log("Fetched karchi weather is " + khi_W)

  console.log("Fetching Lahore weather please wait ...")
  let Lhr_W = await lahoreWeather
  console.log("Fetched lahore weather is " + Lhr_W)

  return [Lhr_W, khi_W]
};

let a = weatherHandle()
a.then((value)=>{
    console.log(value)
})