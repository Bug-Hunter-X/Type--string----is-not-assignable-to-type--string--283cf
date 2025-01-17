function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct usage for array of strings

let user2 = "Jane Doe";
console.log(greeter(user2)); //Correct usage for single string