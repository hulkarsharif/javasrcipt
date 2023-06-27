let movieCollection = {
    movies: [],
    moviesTheSameGenre: [],

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
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies.length === title) {
                return this.movies(i);
            }
        }
    },

    getMovieByGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies.length === genre) {
                this.moviesTheSameGenre.push(this.movies[i]);
            }
        }
        return this.moviesTheSameGenre;
    },

    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                (this.movies[i].director = update.director),
                    (this.movies[i].genre = update.genre),
                    (this.movies[i].year = update.year);
            }
        }
    },

    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies.splice(i, 1);
            }
        }
    },

    printMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`Title: ${this.movies[i].title}`);
            console.log(`Director: ${this.movies[i].director}`);
            console.log(`Genre: ${this.movies[i].genre}`);
            console.log(`Year: ${this.movies[i].year}`);
            console.log("------------");
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
