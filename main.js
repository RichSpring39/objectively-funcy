
function createPerson(firstName, lastName){
  person = {
    firstName:firstName,
    lastName:lastName
  }
  return person;
}
function getFirstName(person){
  return person.firstName;
}

function getLastName(person){
  return person.lastName;
}

function getFullName(person){
  let fullName = `${person.firstName} ${person.lastName}`;
  return fullName;
}

function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
  return person;

}
function setAge(person, age){
  person.age = age;
  return person;

}
function giveBirthday(person){
  if(person.age === undefined){
    person.age = 1;
  }
  else{
    person.age = person.age + 1;
  }
  return person;
}

function marry(person1, person2){
  
  person1.married = true;
  person1.spouseName = getFullName(person2);
  person2.married = true;
  person2.spouseName = getFullName(person1);

}

function divorce(person1, person2){
  
  person1.married = false;
  delete person1.spouseName;
  person2.married = false;
  delete person2.spouseName;

}

let colin = createPerson("Colin", "Jaffe");
console.log(getFirstName(colin));
console.log(getLastName(colin));
console.log(getFullName(colin));
console.log(setFirstName(colin, "Bradley"));
console.log(setAge(colin,31));
console.log(giveBirthday(colin));
let petra = createPerson("Petra", "Solano");
console.log(giveBirthday(petra));
marry(colin, petra);
console.log(colin);
console.log(petra);
divorce(colin, petra);
console.log(colin);
console.log(petra);



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}