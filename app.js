const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
    'Patryk',
    'Piotr',
    'Jarosław',
    'Grzegorz',
    'Marcin',
    'Jakub',
    'Tomasz',
];

const femaleNames = [
    'Gabriela',
    'Joanna',
    'Martyna',
    'Anna',
    'Sylwia',
    'Magdalena',
    'Marta',
];

const lastNames = [
    'Płaczek',
    'Chmura',
    'Bernal',
    'Schmit',
    'Król',
    'Sztuciec',
    'Sokół',
];

const people = [];
const ages = {min: 18, max: 78};

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const randChoiceAge = ({ min, max }) => {
  return Math.floor(Math.random()*(max - min + 1)) + min;
};

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);

  let firstName;
  if (gender === 'M') {
    firstName = randChoice(maleNames);
  } else {
    firstName = randChoice(femaleNames);
  }

  const lastName = lastNames[Math.floor(Math.random() * 7)];

  const age = randChoiceAge(ages);

  const peopleData = {gender, firstName, lastName, age};

  people.push(peopleData);
}

const jsonPeople = JSON.stringify(people);

fs.writeFile('people.json', jsonPeople, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});