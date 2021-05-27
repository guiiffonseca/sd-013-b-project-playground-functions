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

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8 ver erro
function fizzBuzz(array){
let resultString=[]
for(let index=0; index<array.length; index+=1){
  if(array[index]%3===0 && array[index]%5===0){
  resultString.push('fizzBuzz');
}
  else if(array[index]%3===0){
  resultString.push('fizz');
}
  else if(array[index]%5===0){
  resultString.push('buzz');
}
  else{
  resultString.push('bug!');
}
}
return resultString;
}
console.log(fizzBuzz( [2, 15, 7, 9, 45] ))


//Desafio 9
function encode(){

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
};