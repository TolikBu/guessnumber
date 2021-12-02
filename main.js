"use strict";

function play(a) {
   return function (item) {
    if (isNaN(item)) {
      alert("Введите число");
      
    }  else if (item > a) {
      prompt("Загаданное число меньше", "Введите новое число");
      
    } else if (item < a) {
      prompt("Загаданное число больше", "Введите новое число");
      
    } else if (item == a) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    }else if (item == null) {
      alert("Игра окончена");
    } 
  console.log(item);
  };
  
  
}

const game = play(50);
game(prompt("Угадай число от 1 до 100"));
