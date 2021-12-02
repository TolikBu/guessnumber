"use strict";
let setNum;

const play = function () {
  let number = 50;
  return function () {
    setNum = prompt("Угадай число от 1 до 100");
    console.log(setNum);
    if (isNaN(setNum)) {
      alert("Введите число");
      play();
    } else if (setNum == null) {
      alert("Игра окончена");
    } else if (setNum > number) {
      alert("Загаданное число меньше");
      play();
    } else if (setNum < number) {
      alert("Загаданное число больше");
      play();
    } else if (setNum == number) {
      alert("Поздравляю, Вы угадали!!!");
    }
  } ();
};

play();
