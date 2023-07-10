let movieCollection = {
    movies: [],
    sameGenre: [],

    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },
    getMovieTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },
    getMoviesbyGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                this.sameGenre.push(this.movies[i]);
                return this.sameGenre;
            }
        }
    },
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies[i].director = update.director;
                this.movies[i].genre = update.genre;
                this.movies[i].year = update.year;
                break;
            }
        }
    },

    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies.splice(i, 0);
            }
        }
    },
    printMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`title:${this.movies[i].title}`);
            console.log(`director:${this.movies[i].director}`);
            console.log(`genre:${this.movies[i].genre}`);
            console.log(`year:${this.movies[i].year}`);
            console.log("________");
        }
    }
};

movieCollection.addMovie("Charles", "Jones", "drama", 2022);
movieCollection.addMovie("Charly", "Jon", "action", 2018);
movieCollection.addMovie("Kind", "Anna", "tragedy", 2010);
movieCollection.printMovies();
// movieCollection.deleteMovie("Charles");
// movieCollection.updateMovie("Charles", {
//     director: "Jackson",
//     genre: "action",
//     year: 2010
// });
// console.log(movieCollection);
// console.log(movieCollection.getMovieTitle("Charles"));
// console.log(movieCollection.getMoviesbyGenre("drama"));
// console.log(movieCollection);
