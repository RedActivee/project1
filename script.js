"use strict";

let numberOfFilms;

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", undefined);

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", undefined);
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      if (a === "" || a.length === 50) {
        console.log(
          "Недопустимо использовать пустую строку или же надпись более 50 символов"
        );
        i--;
      } else {
        const b = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[a] = b;
      }
    }
  },
  detectPersonalLevel: function () {
    if (numberOfFilms <= 10) {
      console.log("Маловато будет");
    } else if (numberOfFilms === 10 || numberOfFilms <= 30) {
      console.log("Нормулёк");
    } else if (numberOfFilms >= 30) {
      console.log("Вы вообще человек?");
    } else if (numberOfFilms !== Number) {
      console.log("Ошибочка вышла");
    }
  },
  showMyDB: function (hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      const a = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
      if (a === "" || a === null || a.length === 50) {
        console.log(
          "Недопустимо использовать пустую строку или же надпись более 50 символов"
        );
        i--;
      }
      personalMovieDB.genres.push(a);
    }
  },
  toggleVisibleMyDB: function (active) {
    if (!active) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};
/* personalMovieDB.start()
personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB() */
/* personalMovieDB.writeYourGenres() */
/* personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
console.log(personalMovieDB); */
/* 
function writeYourGenres() {
    for (let i = 0; i < 3;i++){
    
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
        if (a === "" || a.length === 50){
            console.log('Недопустимо использовать пустую строку или же надпись более 50 символов');
            i--;
        };
        personalMovieDB.genres.push(a);
        }
    } */
