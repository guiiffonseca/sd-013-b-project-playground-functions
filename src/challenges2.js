// Desafio 10
function techList(tech, name) {
  let techsArray = [];
  for (let key in tech){
   tech = tech.sort();
   techsArray.push({tech:tech[key], name : name})
  }
  if (techsArray.length === 0){
    return 'Vazio!';
  }
  return techsArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(LineA, LineB, LineC) {

  let check = Boolean;

  if(LineA > (LineB + LineC) || LineB > (LineA + LineC) || LineC > (LineA + LineB) && LineA < (LineB - LineC) || LineB < (LineA - LineC) || LineC < (LineA - LineB)){
    check =  false;
  }
  

  else if (LineA < (LineB + LineC) && LineA > (LineB - LineC) || LineB < ( LineA +  LineC) && LineB> (LineA - LineC) || LineC < (LineA + LineC) && LineC > (LineA-LineC)){
    check = true;
  }
  return check;
}
console.log (triangleCheck(9,6,7))

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
