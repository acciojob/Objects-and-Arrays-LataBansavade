

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a copy of the players array using spread syntax
const team1 = [...players];

// Create a copy of the person object using object destructuring
const cap1 = { ...person };

// Testing changes
players[0] = "Mike";
person.name = "Jane";

console.log("Original players:", players);
console.log("Team:", team);
console.log("Team 1:", team1);
console.log("Original person:", person);
console.log("Cap1:", cap1);


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;


