"use strict";

let numberOfFilms;

function start () {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start ();



const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};





writeYourGenres ()

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const oneOfFilms = prompt('Один из просмотренных фильмов?'),
              filmValue = prompt('Во сколько оцените его?');
        
        if (oneOfFilms != null && filmValue != null && oneOfFilms != '' && filmValue != '' && oneOfFilms.length < 50 && filmValue <= 10) {
            
            personalMovieDb.movies[oneOfFilms] = filmValue;
    
        } else {
            i--;
        }
        
    }
}

rememberMyFilms ();

    


    function detectPersonalLevel () {
        if (personalMovieDb.count >= 30) {
            alert ('Вы киноман');
        }
        
        else if (personalMovieDb.count >= 10) { 
            alert ('Вы классический зритель');
        }
    
        else if (personalMovieDb.count < 10 && personalMovieDb.count > 0) {
            alert ('Просмотрено довольно мало фильмов');
        }   else {
    
                alert ('Ошибка');
    }
    }

detectPersonalLevel ();


function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDb(personalMovieDb.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDb);


