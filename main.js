"use strict";

function play() {
  let lives = 10;
  
  return function check(item) {
    function attempt() { 
      lives--;
      console.log("lives", lives);
      if (lives <= 0) {
        if (confirm("Попытка закончились хотете сыгграть еще раз?")) {
          lives = 10;
          play(); 
        } else {
          return;
        }
      } 
    }

    if (lives <= 0) return;

    const userNum = prompt("Угадайте число от 1 до 100");
    if (isNaN(userNum)) {
      alert("Введите число");
      return check(item);
    } else if (userNum == item) {
      if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
        lives = 10;
        check(item);
      } else {
        return;
      }
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

