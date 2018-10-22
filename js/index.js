const animalContainer = document.getElementById('animal-selection');

const animals = [
  'panda',
  'tiger',
  'lion',
  'parrot',
  'pavo',
  'tarantula',
  'giraffe',
  'gorilla',
  'redPanda',
  'crocodile',
  'ape',
  'elephant'
];

animals.forEach(animal => {
  const div = document.createElement('div');
  div.className = 'col-lg-2 col-md-2 col-sm-3 col-6';
  const link = document.createElement('a');
  link.href=`animalDescription.html?animal=${animal}`;
  const innerDiv = document.createElement('div');
  innerDiv.className = 'animal-picture';
  innerDiv.style.background = `url("img/animals/${animal}.png")`;

  link.appendChild(innerDiv);
  div.appendChild(link);
  animalContainer.appendChild(div);
});