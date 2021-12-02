"use strict";

function play(number) {
  return (function option() {
    const setNum = prompt("Угадай число от 1 до 100");
    if (isNaN(setNum)) {
      alert("Введите число");
      option();
    } else if (setNum == null) {
      alert("Игра окончена");
    } else if (setNum > number) {
      alert("Загаданное число меньше");
      option();
    } else if (setNum < number) {
      alert("Загаданное число больше");
      option();
    } else if (setNum == number) {
      alert("Поздравляю, Вы угадали!!!");
    }
    console.log(setNum);
  })();
}

const game = play(50);
