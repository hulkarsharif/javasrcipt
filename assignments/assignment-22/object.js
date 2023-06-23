let movie = {
    title: "Suyunchi",
    director: "Melis Abzalov",
    releaseYear: "1982",
    genre: "drama",
    rating: "5"
};

movie.boxOffice = "1 mln$";
console.log(movie.boxOffice);
console.log(movie["boxOffice"]);

// task2
console.log(movie.title);
console.log(movie["title"]);
console.log(movie.director);
console.log(movie["direcror"]);
console.log(movie.releaseYear);
console.log(movie["releaseYear"]);
console.log(movie.genre);
console.log(movie["genre"]);
console.log(movie.rating);
console.log(movie["rating"]);

//task 3
console.log(movie.producer); // undefined
console.log(movie["producer"]); // undefined

//task 4
movie.rating = "4";
console.log(movie.rating);
console.log(movie["rating"]);

// task 5
delete movie.boxOffice;
console.log(movie.boxOffice);

function movieObject(movie) {
    return movie;
}
console.log(
    `The movie ${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear}. It is a ${movie.genre} film with a rating of ${movie.rating}.`
);
