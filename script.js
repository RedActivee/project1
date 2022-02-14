/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',undefined);

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',undefined);
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2;i++){
    
        const a = prompt('Один из последних просмотренных фильмов?',"");
        if (a === "" || a.length === 50){
            console.log('Недопустимо использовать пустую строку или же надпись более 50 символов');
            i--;
        }else{ const b = prompt('На сколько оцените его?',"");
        personalMovieDB.movies[a] = b;}
    }
}
rememberMyFilms();




function detectPersonalLevel() {
    if(numberOfFilms <= 10){
        console.log('Маловато будет')
    }else if (numberOfFilms === 10 || numberOfFilms <= 30){
        console.log('Нормулёк')
    }else if(numberOfFilms >= 30){
        console.log('Вы вообще человек?')
    }else if ( numberOfFilms !== Number ){
        console.log('Ошибочка вышла')
    }
}
detectPersonalLevel();

function showMyDB(hiden) {
    if(!hiden) {
       console.log(personalMovieDB); 
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3;i++){
    
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
        if (a === "" || a.length === 50){
            console.log('Недопустимо использовать пустую строку или же надпись более 50 символов');
            i--;
        };
        personalMovieDB.genres.push(a);
        }
    }
writeYourGenres();

/* const a = prompt('Один из последних просмотренных фильмов?',""),
      b = prompt('На сколько оцените его?',""),
      c = prompt('Один из последних просмотренных фильмов?',""),
      d = prompt('На сколько оцените его?',"");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */