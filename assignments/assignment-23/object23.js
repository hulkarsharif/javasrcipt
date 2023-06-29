let movieCollection = {
    movies: [],

    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },
    getMovieByTitle: function (title) {
        for (let movie of this.movies) {
            if (movie.title === title) {
                return movie;
            }
        }
        return null;
    },

    getMovieByGenre: function (genre) {
        let moviesByGenre = [];
        for (let movie of this.movies) {
            if (movie.genre === genre) {
                moviesByGenre.push(movie);
            }
        }
        return moviesByGenre;
    },

    updateMovie: function (title, update) {
        for (let movie of this.movies) {
            if (movie.title === title) {
                (movies.director = update.director),
                    (movie.genre = update.genre),
                    (movie.year = update.year);
                break;
            }
        }
    },

    deleteMovie: function (title) {
        let sliceIdx;
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                sliceIdx = i;
                break;
            }
        }
        if (sliceIdx !== undefined) {
            this.movies = this.movies
                .slice(0, sliceIdx)
                .concat(this.movies.slice(sliceIdx + 1));
        }
    },

    printMovies: function () {
        for (let movie of this.movies) {
            console.log(
                `Title: ${movie.title}, Director: ${movie.director}, Genre: ${movie.genre}, Year: ${movie.year}`
            );
        }
    }
};

//1
movieCollection.addMovie("The Mother", "Niki Caro", "Action", 2023);
movieCollection.addMovie("Fubar", "Nick Santora", "Drama", 2023);
movieCollection.addMovie("Luther", "Jamie Payne", "Thriller", 2023);
//2

console.log(movieCollection.getMovieByTitle("Fubar"));

//3
console.log(movieCollection.getMovieByGenre("Action"));
//4

movieCollection.printMovies();
