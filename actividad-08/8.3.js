// Verifica si la propiedad name se encuentra dentro del siguiente objeto:
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

for(const prop in student){
    if(prop == 'name'){
        console.log(true)
        break
    }
    else{
        console.log(false)
    }
}  

console.log(student.hasOwnProperty('name'));
