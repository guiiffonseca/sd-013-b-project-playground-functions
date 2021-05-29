// Desafio 10
function techList(tech, name) {
 tech = tech.sort();
  let techsArray = [];
  for (let key in tech){
  
    techsArray.push({tech:tech[key], name : name})
  }
  if (techsArray.length === 0){
    return 'Vazio!';
  }
  
    return techsArray;
  

}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
