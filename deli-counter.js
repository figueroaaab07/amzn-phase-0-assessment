// 1. Write your functions here
const katzDeli = [];

function line(arrayPersons) {
    if (!arrayPersons.length) {
        return console.log("The line is currently empty.")
    }
    const queue = arrayPersons.map((personName, index) => (index + 1 + ". " + personName)).join(' ');
    return console.log("The line is currently:", queue);
}

function takeANumber(arrayPersons, personName){
    arrayPersons.push(personName);
    return console.log(`Welcome, ${personName}. You are number ${katzDeli.length} in line.`)
}

function nowServing(arrayPersons) {
    if (!arrayPersons.length) {
        return console.log("There is no person to serve.")
    }
    servingPerson = arrayPersons[0];
    arrayPersons.shift();
    return console.log(`Currently serving ${servingPerson}.`)
}

line(katzDeli);

nowServing(katzDeli);

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"