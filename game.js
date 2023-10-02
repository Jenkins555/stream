const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function logResult(fileName, result) {
  fs.appendFile(fileName, result + '\n', (err) => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
    }
  });
}

function startGame(fileName) {
  console.log('Игра "Орёл или решка"');
  rl.question('Угадайте 1 (орёл) или 2 (решка): ', (answer) => {
    const randomNumber = Math.floor(Math.random() * 2) + 1;

    if (answer === '1' || answer === '2') {
      console.log('Вы выбрали:', answer);
      console.log('Правильный ответ:', randomNumber);

      if (parseInt(answer) === randomNumber) {
        console.log('Поздравляем, вы угадали!');
        logResult(fileName, 'Победа');
      } else {
        console.log('К сожалению, вы не угадали.');
        logResult(fileName, 'Поражение');
      }
    } else {
      console.log('Введите 1 или 2.');
    }

    rl.close();
  });
}

// Проверяем наличие аргумента с именем файла для логирования
if (process.argv.length !== 3) {
  console.log('Использование: node имя файла.js имя файла для логирования');
  process.exit(1);
}

const logFileName = process.argv[2];
startGame(logFileName);
