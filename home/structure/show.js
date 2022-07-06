function showMovies(data)
{
    main.innerHTML='';
    const { title, poster_path, vote_average, overview, original_language, id } = data;

    const movieEl = document.createElement("div");
    movieEl.classList.add("review");
    movieEl.innerHTML=`
    
    <div class="posterbtn">
    <div class="poster">
        <img src="${poster_path? IMG_URL + poster_path : "https://media4.giphy.com/media/804TNmnYLfNao/giphy.gif"}"
            alt="${title}">
    </div>
    <div class="btn">
        <span>Book tickets</span>
    </div>
</div>
<div class="info">
    <div class="movieinfo">
        <div class="name">
            <p>${title}</p>
        </div>
        <div class="rating">
            <p>${vote_average}</p>
        </div>
        <div class="lan">
            <p>${original_language}</p>
        </div>
    </div>
    <div class="o">
        <h3>Overview</h3>
        <p>${overview}
        </p>
    </div>
    <div class="trailer">
        <h3>Trailers</h3>
        <div class="trailer-thumbnail">
        <div class="traileryt">
            <a href="#"><img src="https://media4.giphy.com/media/804TNmnYLfNao/giphy.gif">
                <div class="playicon">
                    <img src="./playicon.png" style="height: 50px; width: 80px;">
                </div>
            </a>
        </div>
        <div class="traileryt">
            <a href="#"><img src="https://media4.giphy.com/media/804TNmnYLfNao/giphy.gif">
                <div class="playicon">
                    <img src="./playicon.png" style="height: 50px; width: 80px;">
                </div>
            </a>
        </div>
        <div class="traileryt">
            <a href="#"><img src="https://media4.giphy.com/media/804TNmnYLfNao/giphy.gif">
                <div class="playicon">
                    <img src="./playicon.png" style="height: 50px; width: 80px;">
                </div>
            </a>
        </div>
    </div>
    </div>
</div> 
    `
    main.appendChild(movieEl);

}