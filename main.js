"use strict";
let setNum;

const play = function () {
  // let number = 50;
  return function (item) {
    setNum = prompt("Угадай число от 1 до 100");
    console.log(setNum);
    if (isNaN(setNum)) {
      alert("Введите число");
      play();
    } else if (setNum == null) {
      alert("Игра окончена");
    } else if (setNum > item) {
      alert("Загаданное число меньше");
      play();
    } else if (setNum < item) {
      alert("Загаданное число больше");
      play();
    } else if (setNum == item) {
      alert("Поздравляю, Вы угадали!!!");
    }
  } ();
};

const game = play();
game(50);
