"use strict";

function play() {
  let lives = 10;
    function attempt() {
      lives--;
      if (lives <= 0) {
        confirm("Попытка закончились хотете сыгграть еще раз?");
        lives = 10;
        return play();
      } 
  }

  return function check(item) {
    const userNum = prompt("Угадайте число от 1 до 100");
    if (isNaN(userNum)) {
      alert("Введите число");
      return check(item);
    }  else if (userNum == item) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      lives = 10; 
      return play();
    } else if (userNum === null) {
      alert("Всего хорошо");
    } else if (userNum == "") {
      alert("Надо ввесит число от 1 до 100");
      return check(item);
    } else if (userNum > item) {
      alert("Загаданное число меньше, осталось попыток" + " " + (lives - 1));
      attempt();
      return check(item);
    } else if (userNum < item) {
      alert("Загаданное число больше, осталось попыток" + " " + (lives - 1));
      attempt();
      return check(item);
    }
  };

}


const game = play();
game(50);

