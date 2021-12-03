"use strict";

function play() {
  return function check(item) {
    const userNum = prompt("Угадайте число от 1 до 100");
    if (isNaN(userNum)) {
      alert("Введите число");
      return check(item);
    } else if (userNum === null) {
      alert("Игра окончена");
    } else if (userNum == item) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    }  else if (userNum == "") {
      prompt("Надо ввесит число от 1 до 100");
      return check(item);
    } else if (userNum > item) {
      alert("Загаданное число меньше");
      return check(item);
    } else if (userNum < item) {
      alert("Загаданное число больше");
      return check(item);
    }
  };
}

const game = play();
game(50);
