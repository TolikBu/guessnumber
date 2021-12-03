"use strict";

function play() {
  return function check(item) {
    const userNum = prompt("Угадайте число от 1 до 100");
    if (isNaN(userNum)) {
      alert("Введите число");
      return check(item);
      // return;
    } else if (userNum > item) {
      alert("Загаданное число меньше");
      return check(item);
      // return;
    } else if (userNum < item) {
      alert("Загаданное число больше");
      return check(item);
      // return;
    } else if (userNum == item) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    } else if (userNum === null) {
      alert("Игра окончена");
      console.log(userNum);
    }
  };
}

const game = play();
game(50);
