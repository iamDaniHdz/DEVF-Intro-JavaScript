// Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// bucle for...in
for (const prop in student) {
    console.log(`${prop} = ${student[prop]}`);
}

// Object.keys(o)
console.log(Object.keys(student));