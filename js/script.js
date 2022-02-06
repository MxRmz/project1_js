"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const oneOfFilms = prompt('Один из просмотренных фильмов?'),
    filmValue = prompt('Во сколько оцените его?'),
    oneOfFilms1 = prompt('Один из просмотренных фильмов?'),
    filmValue1 = prompt('Во сколько оцените его?');


personalMovieDb.movies[oneOfFilms] = filmValue;
personalMovieDb.movies[oneOfFilms1] = filmValue1;

console.log(personalMovieDb);
