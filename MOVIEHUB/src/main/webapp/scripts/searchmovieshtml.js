//for yt thumbnail = "https://img.youtube.com/<<key>>/maxresdefault.jpg";

const API_KEY = "api_key=ace2601ae1c3e7f619a4bcf8de7ed57e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const BIGIMG_URL = "https://image.tmdb.org/t/p/w1280"


//for search
const main = document.getElementById("main");
const searchform = document.getElementById("search-form");
const search = document.getElementById("search");


//for pagination
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");
const up= document.getElementById("genretags"); //for scroll into view



var currentPage=1;  //just initializing we get this shit from api
var nextPage=2;
var prevPage=3;
var lastUrl='';
var totalPages=100;


//todays date
// var today = new Date();
// var today2weeks = today;
// var dd = today.getDate();

// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = "0" + dd;
// }

// if (mm < 10) {
//   mm = "0" + mm;
// }

// today = yyyy + "-" + mm + "-" + dd;
// today2weeks = yyyy + "-" + "06" + "-" + "02"; //man idh lazy code evad cheyatle, nak kuda opika ledh

const API_URL =
  BASE_URL +
  "/discover/movie?primary_release_date.gte=" +
  // today2weeks +
  // "&primary_release_date.lte=" +
  // today +
  "&sort_by=popularity.desc&" +
  API_KEY;

const Language_URL = API_URL + "&with_original_language=";

console.log(API_URL);
var selectedLanguage=[];
const languages=[
  {
      "id": "en",
      "name":"english"
  },
  {
      "id": "te",
      "name":"telugu"
  },
  {
      "id": "hi",
      "name":"hindi"
  },
  {
      "id": "ta",
      "name":"tamil"
  },
  {
    "id": "ml",
    "name":"malayalam"
  },
  {
    "id": "kn",
    "name": "kannada"
  },
  {
    "id": "ja",
    "name":"japanese"    
  },
  {
    "id": "ko",
    "name":"korean"     
  }


]

const genres=[
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" },
  { "id": 99, "name": "Documentary" },
  { "id": 18, "name": "Drama" },
  { "id": 10751, "name": "Family" },
  { "id": 14, "name": "Fantasy" },
  { "id": 36, "name": "History" },
  { "id": 27, "name": "Horror" },
  { "id": 10402, "name": "Music" },
  { "id": 9648, "name": "Mystery" },
  { "id": 10749, "name": "Romance" },
  { "id": 878, "name": "Science Fiction" },
  { "id": 10770, "name": "TV Movie" },
  { "id": 53, "name": "Thriller" },
  { "id": 10752, "name": "War" },
  { "id": 37, "name": "Western" }
]
const genretagsEl = document.getElementById("genretags");
var selectedgenre=[];


setgenre();
function setgenre() {
    
  
  console.log(selectedLanguage.length);
  genretagsEl.innerHTML="";
  genres.forEach(genre =>{

  const t = document.createElement('div');
  t.classList.add('genretag');
  t.id = genre.id; 
  t.innerText = genre.name;
  t.addEventListener('click', () => {
      if(selectedgenre==0)
      {
          selectedgenre.push(genre.id);
      }
      else
      {
          if(selectedgenre.includes(genre.id))
          {
              selectedgenre.forEach((id,idx) => {
                  if(id==genre.id)
                  {
                      selectedgenre.splice(idx,1);
                  }
              })
          }
          else
          {
              selectedgenre.push(genre.id)
          }
      }
      console.log(selectedLanguage.length);
      if(selectedLanguage.length==0)
      {
        highlightgenreSelection();
        var genre_URL =  API_URL + "&with_genres=" + encodeURI(selectedgenre.join(",") );
        console.log(genre_URL);
        getMovies(genre_URL);
      }
      else
      {
        highlightgenreSelection();
        var genre_URL =  API_URL + "&with_genres=" + encodeURI(selectedgenre.join(",") +  "&with_original_language=" + selectedLanguage[0]);
        console.log(genre_URL);
        getMovies(genre_URL);
      }
  })
  genretagsEl.append(t);
})

    
   
}





function highlightgenreSelection() {
    const tags = document.querySelectorAll(".genretag");
    tags.forEach(tag => {
        tag.classList.remove("selectedtag");
    })
    clearBTN();
    if(selectedgenre.length!=0)
    {
        selectedgenre.forEach(id => {
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('selectedtag');
            
        })
    }
}

function clearBTN()
{
  let clearBTN = document.getElementById("clear");
  if(clearBTN)
  {
    clearBTN.classList.add("selectedtag");
  }
  else
  {
    if(selectedLanguage.length===0)
    {
      let clear = document.createElement("div");
      clear.classList.add("genretag", "selectedtag");
      clear.id="clear";
      clear.innerText= "Clear x";
      clear.addEventListener("click", () => {
        selectedgenre=[];
        setgenre();
        getMovies(API_URL);
      })
      genretagsEl.append(clear);   
    }
    else
    {
      let clear = document.createElement("div");
      clear.classList.add("genretag", "selectedtag");
      clear.id="clear";
      clear.innerText= "Clear x";
      clear.addEventListener("click", () => {
        selectedgenre=[];
        setgenre();
        getMovies(API_URL + "&with_genres=" + encodeURI(selectedgenre.join(",") +  "&with_original_language=" + selectedLanguage[0]));
      })
      genretagsEl.append(clear);   
    }
  }
    
}   






const tagsEl = document.getElementById("languagetags");


setlanguage();
function setlanguage() {

  tagsEl.innerHTML="";
  languages.forEach(language =>{

    const t = document.createElement('div');
    t.classList.add('languagetag');
    t.id = language.id; 
    t.innerText = language.name;
    t.addEventListener('click', () => {
    if(selectedLanguage==0)
    {
        selectedLanguage.push(language.id);
    }
    else
    {
      if(selectedLanguage.includes(language.id))
      {
          selectedLanguage.pop();
      }
      else
      {
          selectedLanguage.pop();
          selectedLanguage.push(language.id);
      }
    }
    if(selectedLanguage.length===0)
    {
      console.log(selectedLanguage.length);
      highlightLanguageSelection();
      const selectedLanguage_URL = API_URL + "&with_genres=" + encodeURI(selectedgenre.join(",")) ;
      console.log(selectedLanguage_URL);
      getMovies(selectedLanguage_URL);
    }
    else
    {
      console.log(selectedLanguage.length);
      highlightLanguageSelection();
      const selectedLanguage_URL = API_URL + "&with_genres=" + encodeURI(selectedgenre.join(",")) + "&with_original_language=" + selectedLanguage[0];
      console.log(selectedLanguage_URL);
      getMovies(selectedLanguage_URL);
    }
        
    })
    tagsEl.append(t);


  })
}

function highlightLanguageSelection() {
    const tags = document.querySelectorAll(".languagetag");
    tags.forEach(tag => {
        tag.classList.remove("selectedtag");
    })
    if(selectedLanguage.length!=0)
    {
      selectedLanguage.forEach(id => {
          const highlightedTag = document.getElementById(id);
          highlightedTag.classList.add('selectedtag');
      })
    }
}








getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if(data.results.length !== 0){
            showMovies(data.results);
            currentPage = data.page;                                    //for pagination,search from here
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;
            if (currentPage==1&&totalPages==1)
            {
              prev.classList.add('disabled');
              next.classList.add('disabled');
            }
            else if(currentPage <= 1){
              prev.classList.add('disabled');
              next.classList.remove('disabled');
            }else if(currentPage>= totalPages){
              prev.classList.remove('disabled');
              next.classList.add('disabled');
            }else{
              prev.classList.remove('disabled');
              next.classList.remove('disabled');
            }

            

        }else{
            
            
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`;
            
        }
       
    })

}


function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {


    const { title, poster_path, vote_average, overview, id, release_date } = movie;
    let datesplit = release_date.split("-");
    const movieEl = document.createElement("div");
    var movieid= movie.id;
    movieEl.id=movieid;
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <a href="../snippets/infomovie.html?id=${id}" style="text-decoration: none;">
    <img src="${poster_path? IMG_URL + poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average?vote_average:'NA'}</span>
            </div>
            <div class="overview">
            <div class="moviestatus">
            <h3>Overview</h3>
          <div class="${onlinestatus(datesplit[0])}"></div>
        </div>
                ${overview}
            </div>
            </a>
    `
    main.appendChild(movieEl);
  })
}
function onlinestatus(num)
{ 
  //console.log(num);
  if(num>=2022) 
  {
    return "circle green";
  }
  else
  {
    return "circle red";
  }

}
function getColor(vote_average) {
  if (vote_average >= 7) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
}


searchform.addEventListener('submit', (event)=> {         //search
  event.preventDefault();

  const searchterm = search.value;
  console.log(searchterm);
  selectedLanguage=[];
  selectedgenre=[]
  setlanguage();
  setgenre();

  if (searchterm) {
           
      getMovies(SEARCH_URL  +'&query=' + searchterm);
      // getMovies(SEARCH_URL +  '&year='+ yyyy +'&query=' + searchterm);
  }
  else
  {
    getMovies(API_URL);
  }

})



prev.addEventListener('click', () => {                         //pagination
  if(prevPage > 0){
    pageCall(prevPage);
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
  }
})

function pageCall(page){
  let urlSplit = lastUrl.split('?');  //splits the url by ? and stores it into url split as array
  // console.log(urlSplit);
  let queryParams = urlSplit[1].split('&');
  // console.log(queryParams);  //splits all search param u got by urlsplit[1] by &
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
    
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    // console.log(a); //joining elements in array key, i.e page and number with =
    queryParams[queryParams.length -1] = a;   //addind page as last element
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
  }
  up.scrollIntoView({behavior : 'smooth'});
}





