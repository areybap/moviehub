const API_KEY = "api_key=ace2601ae1c3e7f619a4bcf8de7ed57e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("review");
const minfo = document.getElementById("movieinfo");
const oinfo = document.getElementById("overview");
const yttrailer = document.getElementById("thumbnail");
const pbtn = document.getElementById("posterbtn");



let info= new URL(window.location.href);
const {search} = info;
let searchsplit= search.split('=');
movie_id=searchsplit[1];


const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const API_URL =
  BASE_URL + "/movie/" + movie_id + "?" + API_KEY;


const YT_URL = BASE_URL + "/movie/" + movie_id + "/videos?" + API_KEY; 
console.log(API_URL);  
 


getMovies(API_URL);

function getMovies(url) {
    
      fetch(url).then(res => res.json()).then(data => {
          console.log(data);
          showMoviesInfo(data);
          showOverviewInfo(data);
          showPoster(data);

      })
  
}



function showMoviesInfo(data)
{
    minfo.innerHTML='';
    const { title, poster_path, vote_average, overview, original_language, id } = data;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movieinfo");
    movieEl.innerHTML=`
    <div class="name">
            <p>${title}</p>
        </div>
        <div class="rating">
        <p class="${getColor(vote_average)}">${vote_average?vote_average:'NA'}</p>
        </div>
        <div class="lan">
            <p>${original_language}</p>
        </div>
    

    
    `
    minfo.appendChild(movieEl);

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

function showOverviewInfo(data)
{
    oinfo.innerHTML='';
    const { title, poster_path, vote_average, overview, original_language, id, tagline } = data;

    const movieEl = document.createElement("div");
    movieEl.classList.add("o");
    if(tagline==="")
    {

      movieEl.innerHTML=`

      <h3>Overview</h3>
      <p>${overview}
      </p>
      `
      oinfo.appendChild(movieEl);

    }
    else
    {
      movieEl.innerHTML=`

      <h3>Overview</h3>
      <h4>"${tagline}"</h4>
      <p>${overview}
      </p>
      `
      oinfo.appendChild(movieEl);

    }

}



function showPoster(data)
{
    pbtn.innerHTML='';
    const { title, poster_path, vote_average, overview, original_language, id } = data;

    const movieEl = document.createElement("div");
    movieEl.classList.add("poster");
    movieEl.innerHTML=`
    <img src="${poster_path ? IMG_URL + poster_path : "https://i.gifer.com/5IJ.gif " }" alt="${title}">
    <div class="btn">
        <span>Book tickets</span>
    </div>
    `
    pbtn.appendChild(movieEl);

}

getTrailer(YT_URL);

function getTrailer(url)
{
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if(data.results.length !== 0){
            showTrailer(data.results);
            
        }else{
            
            yttrailer.innerHTML = '' ;
            yttrailer.innerHTML= `<h2 class="no-results">sorry no results found</h2>`;
            
        }
       
    })
}

function showTrailer(data)
{
    yttrailer.innerHTML = " ";
    var displaycount=0;

    data.forEach((trailer) => {
        
    
      
      const { site, key, name, official, id, type } = trailer;
      
      if(trailer.site==="YouTube"&&trailer.type==="Trailer"&&displaycount<3){
        
        

        const movieEle = document.createElement("div");
        movieEle.classList.add("traileryt");
        var trailerid= trailer.id;
        
        
        movieEle.innerHTML = `
       
            <a href="https://www.youtube.com/watch?v=${key}"><img src="https://img.youtube.com/vi/${key}/maxresdefault.jpg" alt="howl">
               
            </a>
      `
      
      yttrailer.appendChild(movieEle);
      displaycount++;
      
    //   console.log(yttrailer.innerHTML);
      }

    
    
    })
}


