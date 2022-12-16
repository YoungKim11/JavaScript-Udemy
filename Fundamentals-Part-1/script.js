// let country = "The Netherlands";
// let continent = "Europe";
// let population = "17.53 million";

// console.log(country);
// console.log(continent);
// console.log(population);

// Assignment Operators
// const now = 2037;
// const ageDarrick = now - 1991;
// const ageJah = now - 1998;

// console.log(ageDarrick, ageJah);

// console.log(ageDarrick * 2, ageDarrick / 2, 2 ** 3);

// const firstName = 'Darrick';
// const lastName = 'Robarge';

// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; //15
// x += 10 // x + 10 = 25
// x *= 4 // x * 4 = 100 
// x -= 25 // x - 25 = 75
// x++ // x + 1
// x-- //x - 1
// console.log(x)

// // Comparison operators
// console.log(ageDarrick > ageJah);
// console.log(ageDarrick < ageJah);
// console.log(ageJah >= 18);

// console.log(now - 1991 > now - 2020)

// const now = 2037;
// const ageDarrick = now - 1991;
// const ageJah = now - 1998;

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageDarrick + ageJah) / 2;
// console.log(ageDarrick, ageJah, averageAge)

//Test Data 1: true
//Test Data 2: false
// let height;
// let mass;

// //Mark BMI
// height = 1.88;
// mass = 95;
// const markBMI = mass / height ** 2;
// console.log(markBMI);

// //John BMI
// height = 1.76;
// mass = 85;
// const johnBMI = mass / height ** 2;
// console.log(johnBMI);

// const markMass = 78;
// const markHeight = 1.69
// const markBMI = markMass / markHeight ** 2;

// console.log(markBMI);

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(johnBMI);


// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI)

//markHigherBMI = true

// const markMass = 95;
// const markHeight = 1.88
// const markBMI = markMass / markHeight ** 2;

// console.log(markBMI);

// const johnMass = 85;
// const johnHeight = 1.76;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(johnBMI);

// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI)

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI: (${markBMI})is high than John's BMI: (${johnBMI})`)
// } else {
//     console.log(`John's BMI: (${johnBMI}) is higher than Mark's BMI: (${markBMI}) `)
// }

// //markHigherBMI = false

// const firstName = 'Darrick';
// const job = 'Barista';
// const age = 31;

// const darrick = `I'm ${firstName}, a ${age} year old ${job}!`
// console.log(darrick)

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String
// multiple
// lines`);

// const age = 16 

// if (age >= 18) {
//     console.log(`Sarah can stat driving lessons`);
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah can't start driving lessons, wait ${yearsLeft} years.`)
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// }
// console.log(century)

// type conversion
// const inputYear = `1991`;

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` - `10` - 3); //10
// console.log(`23` / `2`); // 11.5
// console.log(`10` + 5); // 105
// console.log(`10` + 5 - 5); // 100

//Falsy values
// console.log(Boolean(0));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(undefined));
// console.log(Boolean(''));


// const money = 0;
// if (money) {
//     console.log(`spend all`);
// } else {
//     console.log(`get a job`);
// }

// let height;
// if (height) {
//     console.log(`Yay!`)
// } else {
//     console.log(`No height!`);
// }

// let object = {};
// if (object) {
//     console.log
// }

// equality operator ===

// const age = 18
// if (age === 18) console.log(`You're 18`)

// const favoriteNumber = Number(prompt("Whats your number"));
// console.log(favoriteNumber);

// if (favoriteNumber === 23) {
//     console.log(`WOW its ${favoriteNumber}!!!`)
// } else if(favoriteNumber === 7) {
//     console.log(`thats cool too`)
// }
// else {
//     console.log(`you suck`)
// }

// logical operators
// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//     console.log(`She should drive`)
// } else {
//     console.log(`she should not`)
// }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`She should drive`)
// } else {
//     console.log(`she should not`)
// }

// const dolphinsScore1 = 01;
// const dolphinsScore2 = 100;
// const dolphinsScore3 = 100;
// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(`Dolphin Average: ${dolphinsAverage}`);

// const koalasScore1 = 10;
// const koalasScore2 = 110;
// const koalasScore3 = 110;
// const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koala Average: ${koalasAverage}`);

// if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolhpins won ${dolphinsAverage}`);
// } else if(dolphinsAverage === koalasAverage) {
//     console.log(`The match ended in a draw `)
// } else if((dolphinsAverage && koalasAverage) < 100) {
//     console.log(`Score has to be 100 or greater to determine a winner`)
// } else {
//     console.log(`Koalas won ${koalasAverage}`)
// }

// if (dolphinsAverage === koalasAverage) {
//     console.log(`Match ended in a draw`)
// } else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log(`Dolphins win ${dolphinsAverage}`)
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//     console.log(`Koalas win ${koalasAverage}`);
// } else {
//     console.log(`Score has to be 100 or more.`);
// }

// const day = `monday`;

// switch(day) {
//     case `monday`: //day = Monday
//         console.log(`Plan course structure`);
//         console.log(`Go to meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prep Theory vids`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Study`);
//         break; 
//     case `friday`:
//     case `saturday`:
//     case `sunday`: 
//         console.log(`Chill have fun`);
//         break;
//     default:
//         console.log(`not a valid day`);
// }

// if (day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to meetup`);
// } else if(day === 'tuesday') {
//     console.log(`Prep Theory vids`);
// } else if (day === `wednesday` && `thursday`) {
//     console.log(`Study`);
// } else if (day === `saturday` && `sunday`) {
//     console.log(`Enjoy the weekend`)
// } else {
//     console.log(`not a valid day`)
// }

// const age = 17

// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`)

// const drink= age >= 18 ? 'wine' : 'water'; 
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 ='wine'
// } else {
//     drink2 = 'water'
// }
// console.log(drink2)

// console.log(`I can drink ${age >=21 ? `wine` : `water`}`)

// const age = 20
//     console.log(`I can drink  ${age >= 21 ? `wine` : `water`}`);
//     const drink = age <= 18 ? `wine` : `h20`;
//     console.log(drink) 

const billValue = 40;
// const tip = billValue <= 50 ? 

// if (billValue >= 50 && billValue <= 300) {
//     const tip = billValue * 0.15;
//     const total = billValue + tip;
//     console.log(`bill value: ${billValue}, the tip value ${tip}, and the total is ${total}` )
// } else if(billValue > 300){
//     const tip = billValue * 0.2;
//     const total = billValue + tip
//     console.log(`bill value: ${billValue}, the tip value ${tip}, and the total is ${total}`)
// } else {
//     console.log(`no tip needed 1`)
// }

// last code challenge
// let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue > 300 ? billValue * 0.2 : `no tip needed`;
// console.log(`tip: ${tip}`);
// let total = billValue >= 50 ? ((billValue * 0.15) + billValue) : billValue <= 300 ? (billValue * 0.2) + billValue : total = 'No tip needed';
// console.log(`total ${total}`);
// total = (billValue * 0.15) + billValue 
// total = (billValue * 0.2) + billValue


// console.log(`bill value: ${billValue}, the tip value ${tip}, and the total is ${total} #1`)

// console.log(`bill value: ${billValue}, the tip value ${tip}, and the total is ${billValue + tip} #2`)
