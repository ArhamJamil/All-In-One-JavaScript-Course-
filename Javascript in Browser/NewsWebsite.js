// API KEY : e6570dd8302b4c19a10e937e44869c9f

let apiKey = "e6570dd8302b4c19a10e937e44869c9f";
let source = "bbc-news";

// create a news container :

let newsAcordian = document.getElementById("newsAcordian");

// Create a AJAX Get request
const XHR = new XMLHttpRequest();
XHR.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// What to do whrn response is ready :
XHR.onload = function () {
  if (this.status === 200) {
    let Mynews = "";
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    // for (let index = 0; index < articles.length; index++) {
    // console.log(articles[index].title)
    // console.log(articles[index].description)
    // console.log(articles[index].content)

    // }

    for (let index = 0; index < articles.length; index++) {
      let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed text-dark"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News #${index}:</b> <span> ${articles[index].title}</span>
                                    
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAcordian">
                                <div class="accordion-body">
            
                                    ${articles[index].description}
                                    
                                </div>
                                <div class="accordion-body">
            
                                    <b>Published at: </b> ${articles[index].publishedAt}
                                </div>
                            </div>
                        </div>`;
      Mynews += news;
    }
    newsAcordian.innerHTML = Mynews;
  } else {
    console.log("some error has occured");
  }
};

XHR.send();
