const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const movieTitle = document.getElementById('movie-title');
const movieGenre = document.getElementById('movie-genre');
const movieCast = document.getElementById('movie-cast');
const movieRating = document.getElementById('movie-rating');
const movieReleased = document.getElementById('movie-released');
const movieDirector = document.getElementById('movie-director');
const moviePoster = document.getElementById('movie-poster');

searchButton.addEventListener('click', () => {

    const apiKey = 'adff2bf8';
    const query = searchInput.value;

    fetch(`https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            movieTitle.textContent = data.Title;
            movieGenre.textContent = data.Genre;
            movieCast.textContent = data.Actors;
            movieRating.textContent = data.imdbRating;
            movieReleased.textContent = data.Released;
            movieDirector.textContent = data.Director;
            moviePoster.src = data.Poster;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});