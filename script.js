// Call the main functions the page is loaded
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

// ** Helper function that makes dynamic API calls **
fetchMovies = async (url, dom_element, path_type) => {
  // Use Fetch with the url passed down
  let response = await fetch(url);
  try {
    let data = await response.json();
    showMovies(data, dom_element, path_type);
  } catch (error) {
    console.log(error + "Something happened");
  }
};
//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  let moviesDiv = document.querySelector(dom_element);
  {
    for (let movie of movies.results) {
      let imgDiv = document.createElement("img");

      imgDiv.setAttribute("data-id", movie.id);

      imgDiv.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

      moviesDiv.appendChild(imgDiv);
    }
  }
};
// ** Function that fetches Netflix Originals **
getOriginals = () => {
  let url = `https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213`;
  fetchMovies(url, ".original__movies", "poster_path");
};
// ** Function that fetches Trending Movies **
function getTrendingNow() {
  let url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "poster_path");
}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, "#top_rated", "poster_path");
}

let got = document.getElementById("got");
let play = document.getElementById("p1attack");

got.onclick = () => {
  play.play();
};

originals.onclick = () => {
  document.getElementById("p2attack").play();
};
madan.onclick = () => {
  document.getElementById("p3attack").play();
};





