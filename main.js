const apiKEY = "ed59919d254a4fb7a2dafd11752d008f";
const urlNews = "https://newsapi.org/v1/articles"

const params = `${urlNews}?source=bbc-news&apiKey=${apiKEY}`;

var promise = $.get(params);

let data = {}

let buzzNouns = ["Trump", "Korea", "China", "Venezuela", "Clinton", "man", "woman", "Man", "Woman", "Congress", "Obamacare", "Republicans", "Democrats", "Russia", "Putin", "warming","Britain", "UK", "Ireland", "Canada", "House", "Senate", "May", "Theresa May", "Pakistan", "Iraq", "Iran", "Scaramucci", "car", "lorry", "truck", "internet", "computer", "Apple", "iPhone", "Android", "Google", "cell phone", "phone", "ISIS", "IS", "police", "firefighter", "Kenya", "attacker", "killer", "Islamist", "Muslim", "spy", "Tesla", "US", "missile", "hacker", "CNN", "BBC", "Fake", "News", "robot", "Tesla", "Firefighters", "Ohio", "snake", "gunmen", "attack"]


let newNouns = ["Queen", "dragon", "peasants", "trolls", "giants", "witch", "witches", "wizard", "wizards", "warlock", "King Bastion the Grievous", "Maribold the Lacklust", "Ben the Benless", "Lord Farnsworth the Terrible", "the Plague", "the Pestilence", "the God-King Wrath", "hovel", "the OBAMA", "single payer levied taxes", "mounted knights", "firebreathing harpees of the Evergreen Woods", "the Curse of Barnwell Woods", "Freya the Playa'", "the Dead Undead", "farmstead", "Lugar the Tiny", "dead peasants", "The Void", "executioner", "tavern", "tavern owner", "barmaid", "princess", "King's Men", "Queen's Ladies", "Warrior Queen Finel the Beheader", "spike pit", "Leviathan", "The Cauldron of Remorse", "Imperial Palace", "men with spears", "weak old men"]

let replaceNews = []

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

promise.then(function(result) {
  //success
  data = result;
  console.log(data);

// Create an editable array with news titles
  for (let i = 0; i < data.articles.length; i++) {
    replaceNews[i] = data.articles[i].title;
  }

// Break apart news title, and replace any buzzNouns with a random newNoun
  for(let r = 0; r < replaceNews.length; r++) {
    let titleArray = replaceNews[r].split(" ");
    replaceNews[r] = "";
    console.log(titleArray);
    for(let i = 0; i < titleArray.length; i++) {
      for (let s = 0; s < buzzNouns.length; s++ ){
        if(titleArray[i] == buzzNouns[s]) {
          let randomWord = Math.floor(Math.random()*newNouns.length);
          titleArray[i] = newNouns[randomWord];
          console.log(titleArray);
        }
      }
    }
    for(let q = 0; q < titleArray.length; q++) {
      replaceNews[r] = replaceNews[r] + titleArray[q] + " ";
      replaceNews[r] = capitalizeFirstLetter(replaceNews[r]);
      console.log(replaceNews[r]);
    }
  }

    // // for(let i = 0; i < buzzNouns.length; i++) {
    // //   if(replaceNews[r].search(buzzNouns[i]) > 0) {
    // //     console.log("replacing")
    // //     let randomWord = Math.floor(Math.random()*newNouns.length);
    //     // console.log(randomWord);
    //     // console.log(buzzNouns[i], newNouns[randomWord]);
    //     // replaceNews[r] = replaceNews[r].replace(buzzNouns[i], newNouns[randomWord])
    //     // console.log(replaceNews[r])
    //   }
    // }

  for (let i = 0; i < replaceNews.length; i++) {
    let newsTitle = $("<li></li>").text(replaceNews[i]);
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
