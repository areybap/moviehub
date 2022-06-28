const API_KEY = "api_key=ace2601ae1c3e7f619a4bcf8de7ed57e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w400";

const main = document.getElementById("main");

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

getmovies(API_URL);

function getmovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    })
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {


    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src="${poster_path? IMG_URL + poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average?vote_average:'NA'}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
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
