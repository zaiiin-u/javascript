'use strict';
/*const poll = {
  question: 'What is your favourite Programming Language?',
  options: ['0:Javscript', '1:Python', '2:c++'],
  answers: new Array(4).fill(0),
  registernewanswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number?)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string');
    {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
//poll.registernewanswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registernewanswer.bind(poll));
*/
/*
const checkDog = function (julie, katie) {
  const juliearr = julie;

  juliearr.shift();
  juliearr.pop();
  juliearr.pop();
  console.log(juliearr);
  const newlist = juliearr.concat(katie);
  for (const [i, dog] of newlist.entries()) {
    if (dog >= 3) console.log(`dog ${i + 1} is adult of age ${dog}`);
    else console.log(`dog${i + 1} is puppie of age ${dog}`);
  }
};
checkDog([1, 2, 3, 6, 4, 5], [1, 2, 3, 6, 4, 5, 7]);
*/
/*const dogAges = [1, 2, 3, 6, 4, 5];
const dog = dogAges
  .filter(age => age <= 2)
  .map(age => `Dog Human Age is ${2 * age}`);
console.log(dog);*/
/*
const calaverage = function (dogAges) {
  const dog = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(dog);
  const adultdogs = dog.filter(ages => ages >= 18);
  console.log(adultdogs);
  const avgage =
    adultdogs.reduce((acc, cur) => acc + cur, 0) / adultdogs.length;
  console.log(avgage);
};
calaverage([5, 2, 4, 1, 15, 8, 3]);
*/

/*const calaverage = dogAges =>
  dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(ages => ages >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const avg = calaverage([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);
*/
// challenge-4

const dogs = [
  {
    weight: 22,
    curfood: 275,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 22,
    curfood: 330,
    owners: ['harry', 'ron'],
  },
  {
    weight: 10,
    curfood: 157,
    owners: ['sarah', 'john'],
  },
];
dogs.forEach(function (dog) {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
const sarahdog = dogs.find(dog => dog.owners.includes('sarah'));
console.log(sarahdog);
console.log(
  `sarah is eating too ${
    sarahdog.curfood > sarahdog.recFood ? 'much' : 'little'
  }`
);

const dogEatTomuch = dogs
  .filter(dog => dog.curfood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogEatTomuch);
console.log(`${dogEatTomuch.join(' and ')}'s dogs eat to much`);

const dogEatTolittle = dogs
  .filter(dog => dog.curfood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogEatTolittle);
console.log(`${dogEatTolittle.join(' and ')}'s dogs eat to little`);

console.log(`${dogs.some(dog => dog.curfood === dog.recFood)}`);

const checkEatOkay = dog =>
  dog.curfood > dog.recFood * 0.9 && dog.curfood < dog.recFood * 1.1;

console.log(dogs.some(checkEatOkay));
console.log(dogs.filter(checkEatOkay));

const dogssorting = dogs.slice().sort((a, b) => a.curfood - b.recFood);
console.log(dogssorting);
