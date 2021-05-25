// Desafio 1
function compareTrue(value1,value2) {
   if(value1 && value2 === true){
      return true;
    }
   else{
      return false;
    }
}


// Desafio 2
function calcArea(base,height) {
  
  return (base*height)/2;
  
}


// Desafio 3
function splitSentence(string) {
let arrayWords=string.split(" ");

  return arrayWords;
  }

// Desafio 4
function concatName(names){
  return names[names.length-1]+', '+names[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+ties;
}

// Desafio 6 terminar
function highestCount(array) {
/*  let highestNum=0;
  let count=0;

  for(let index=0; index<array.length; index+=1){
    if(array[index]>highestNum){
      highestNum=array[index];
    }
  }

  for(let index=0;index<array.legth; index+=1){
    if(array[index]===highestNum){
      count+=1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

/*
let highestNum=Math.max(array);
let repeatedTimes=0

for(let index=0; index<array.legth; index+=1){
  if(highestNum==aray[index]){
    repeatedTimes+=1
  }
}
return repeatedTimes
}

*/

// Desafio 7 terminar
function catAndMouse(){
/*if((cat2-mouse===2) && (cat1-mouse===3)){
  console.log('cat2')
  }
  else if((cat1-mouse===6 && cat2-mouse===12)){
    console.log('cat1')
  }
  else if(cat1-mouse===cat2-mouse){
    console.log('Os gatos trombam e o rato foge')
  }
*/

// Desafio 8
function fizzBuzz(array){
  let arrayOfNumbers=[]
  for (let index=0; index<array.length; index+=1){
   
  if(array[index]%3===0 && array[index]%5===0){
    arrayOfNumbers.push('fizzBuzz');
  }
  else if(array[index]%3===0){
    arrayOfNumbers.push('fizz')
  }
  else if(array[index]%5===0){
    arrayOfNumbers.push('buzz');
  }
  else{
   arrayOfNumbers.push('bug!');
  }
}
  return arrayOfNumbers;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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