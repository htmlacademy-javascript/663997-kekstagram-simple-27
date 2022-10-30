// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function (min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min)) + min);
};

// Функция для проверки максимальной длины строки.
const commentIsToLong = function (maxlengthСomments, comment) {
  return comment.length <= maxlengthСomments;
};

const photoDescription = {
adjective: ['Интересная',
  'Прикольная',
  'Занимательная',
  'Красивая',
  'Любопытнвя'],

  noun: ['картинка',
  'картиночка',
  'фоточка',
  'фотография',
  'фотка'],
  
  addition: ['для истинных ценителей',
  'от профи',
  'немного мрачноватая',
  'без обработки',
  'сделана с любовью']
}

const getArrOfObject = function(amount){
  Arr = [];
  for (let i=0; i<= amount; i++){
    Arr[i] = {
      id: i+1,
      url: 'photos/' + i+1 +'.jpg',
      description: photoDescription.adjective[getRandomInt(1, 5)] + ' ' + 
        photoDescription.noun[getRandomInt(1, 5)] + ' ' +
        photoDescription.addition[getRandomInt(1, 5)],
      likes: getRandomInt(15, 200),
      comments: getRandomInt(0, 200)
    }
  }
  return Arr;
}

getArrOfObject (25);