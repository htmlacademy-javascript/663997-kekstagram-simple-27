// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function (min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min)) + min);
};

// Функция для проверки максимальной длины строки.
const commentIsToLong = function (maxlengthСomments, comment) {
  return comment.length <= maxlengthСomments ? true : false;
};

