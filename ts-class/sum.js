"use strict";
function greet(person) {
    return "Hello " + person.name + " you are " + person.age + " years old today";
}
console.log(greet({
    name: "Bhaskar",
    age: 26
}));
