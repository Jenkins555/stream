const fs = require('fs');

// Функция для анализа логов
function analyzeLogs(logFileName) {
  // Читаем файл логов
  fs.readFile(logFileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return;
    }

    // Разделяем логи на строки
    const logs = data.split('\n');

    // Общее количество партий
    const totalGames = logs.length;

    // Количество выигранных и проигранных партий
    let wins = 0;
    let losses = 0;

    // Анализируем каждую строку логов
    logs.forEach((log) => {
      if (log === 'Победа') {
        wins++;
      } else if (log === 'Поражение') {
        losses++;
      }
    });

    // Процентное соотношение выигранных партий
    const winPercentage = (wins / totalGames) * 100;

    // Вывод результатов
    console.log('Общее количество партий:', totalGames);
    console.log('Количество выигранных партий:', wins);
    console.log('Количество проигранных партий:', losses);
    console.log('Процент выигрышей:', winPercentage.toFixed(2) + '%');
  });
}

// Проверяем наличие аргумента с именем файла для анализа
if (process.argv.length !== 3) {
  console.log('Использование: node analyze-logs.js имя-файла-логов');
  process.exit(1);
}

const logFileName = process.argv[2];
analyzeLogs(logFileName);
