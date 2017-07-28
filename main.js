const apiKEY = "ed59919d254a4fb7a2dafd11752d008f";
const urlNews = "https://newsapi.org/v1/articles"

const params = `${urlNews}?source=bbc-news&apiKey=${apiKEY}`;

var promise = $.get(params);

let data = {}

promise.then(function(result) {
  //success
  data = result;
  console.log(data);
  for (let i = 0; i < data.articles.length; i++) {
    let newsTitle = $("<li></li>").text(data.articles[i].title);
    $("ul").append(newsTitle);
  };
}, function(result) {
  console.log("failure");
});




//
//
// var http = new XMLHttpRequest();
//
// http.open("GET", params, true);
// http.onreadystatechange = function()
// {
//     if(http.readyState == 4 && http.status == 200) {
//         console.log(http.responseText);
//     }
// }
// http.send(null);
