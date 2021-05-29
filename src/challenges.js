// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayWords = string.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let searchingTheHighest = array[0];
  let repeatedTimes = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= searchingTheHighest) {
      searchingTheHighest = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (searchingTheHighest === array[index]) {
      repeatedTimes += 1;
    }
  }
  return repeatedTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    result = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8 ver erro
function fizzBuzz(array) {
  let resultString = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultString.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultString.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultString.push('buzz');
    } else {
      resultString.push('bug!');
    }
  }
  return resultString;
}

// Desafio 9
function encode(string) {
  let encodedPhrase = string;
  encodedPhrase = encodedPhrase.replace(/a/g, '1');
  encodedPhrase = encodedPhrase.replace(/e/g, '2');
  encodedPhrase = encodedPhrase.replace(/i/g, '3');
  encodedPhrase = encodedPhrase.replace(/o/g, '4');
  encodedPhrase = encodedPhrase.replace(/u/g, '5');
  return encodedPhrase;
}

function decode(string) {
  let decodedPhrase = string;
  decodedPhrase = decodedPhrase.replace(/1/g, 'a');
  decodedPhrase = decodedPhrase.replace(/2/g, 'e');
  decodedPhrase = decodedPhrase.replace(/3/g, 'i');
  decodedPhrase = decodedPhrase.replace(/4/g, 'o');
  decodedPhrase = decodedPhrase.replace(/5/g, 'u');
  return decodedPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
