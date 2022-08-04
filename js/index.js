//iteration 1
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Andrew";
console.log(`The navigator's name is ${hacker2}`);

//iteration 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

//iteration 3

const driverUpperCase = hacker1.toUpperCase();
console.log(driverUpperCase);

let driverSpace = ``;
for (const char of driverUpperCase) {
  driverSpace = driverSpace + char + ` `;
}
console.log(driverSpace);

let navigatorReverse = ``;
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse = navigatorReverse + hacker2[i];
}
console.log(navigatorReverse);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You oth have the same name?`);
}
