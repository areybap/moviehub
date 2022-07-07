const API_KEY = "api_key=ace2601ae1c3e7f619a4bcf8de7ed57e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;


//for search
const main = document.getElementById("main");
const searchform = document.getElementById("search-form");
const search = document.getElementById("search");


//for pagination
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

var currentPage=1;  //just initializing we get this shit from api
var nextPage=2;
var prevPage=3;
var lastUrl='';
var totalPages=100;


//todays date
var today = new Date();
var today2weeks = today;
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
today2weeks = yyyy + "-" + "06" + "-" + "01"; //man idh lazy code evad cheyatle, nak kuda opika ledh

const API_URL =
  BASE_URL +
  "/discover/movie?primary_release_date.gte=" +
  today2weeks +
  "&primary_release_date.lte=" +
  today +
  "&sort_by=vote_count.desc&" +
  API_KEY;

console.log(API_URL);

getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
            currentPage = data.page;                                    //for pagination,search from here
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if(currentPage <= 1){
              prev.classList.add('disabled');
              next.classList.remove('disabled')
            }else if(currentPage>= totalPages){
              prev.classList.remove('disabled');
              next.classList.add('disabled')
            }else{
              prev.classList.remove('disabled');
              next.classList.remove('disabled')
            }

            

        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
       
    })

}


function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {


    const { title, poster_path, vote_average, overview, id, release_date } = movie;
    let datesplit = release_date.split("-");
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
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
    `
    main.appendChild(movieEl);
  })
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

function onlinestatus(num)
{ 
  console.log(num);
  if(num>=2022) 
  {
    return "circle green";
  }
  else
  {
    return "circle red";
  }

}

searchform.addEventListener('submit', (event)=> {         //search
  event.preventDefault();

  const searchterm = search.value;
  console.log(searchterm);

  if (searchterm) {
      getMovies(SEARCH_URL +  '&year='+ yyyy +'&query=' + searchterm);
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
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
  }
}