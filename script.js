'use strict';

// Data needed for a later exercise
//section9 - challenge1;
/*const game = {
  team1: 'Bavern Munich',
  team2: 'Bor Dort',
  players: [
    ['a', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['e', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  ],
  odd: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [player1, player2] = game.players;
const [gk, ...fieldplayers] = player1;
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
const player1final = [...player1, 'b', 'c', 'd'];
const {
  odd: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoal('a', 'b', 'e');
team1 < team2 && console.log('team 1 is more likely to win');
team2 < team1 && console.log('team 2 is more likely to win');
*/
//section-9 challenge-2
/*const game = {
  team1: 'Bavern Munich',
  team2: 'Bor Dort',
  players: [
    ['a', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['e', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  ],
  odd: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
  scored: ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'],
};

for (const [i, scores] of game.scored.entries()) {
  console.log(`goal ${i + 1} : ${scores}`);
}
let sum = 0;
let average = 0;
const odds = Object.values(game.odd);
for (const odd of odds) average += odd;

average /= odds.length;
console.log(`Average: ${average}`);

for (const [team, odd] of Object.entries(game.odd)) {
  const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamstr} ${odd}`);
}
*/
//section-9 challenge-3
/*const game = new Map([
  [17, 'red'],
  [18, 'yellow'],
  [19, 'orange'],
  [20, 'green'],
  [21, 'pink'],
  [22, 'purple'],
  [22, 'purple'],
  [64, 'voilet'],
  [65, 'purple'],
  [70, 'purple'],
  [90, 'voilet'],
]);
console.log(game);
game.delete(64);
console.log(game);

for (const [key, value] of game) {
  console.log(
    game.get(key) <= 45
      ? `(FIRST HALF) ${key} : ${value}`
      : `(SECOND HALF) ${key} : ${value}`
  );
}
*/
/*for (const [key, value] of game) {
 if (key <= 45) {
   console.log(`(FIRST HALF) ${key} : ${value}`);
 } else {
   console.log(`(SECOND HALF) ${key} : ${value}`);
 }
}
*/
