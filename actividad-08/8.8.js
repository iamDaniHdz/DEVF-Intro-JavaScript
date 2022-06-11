var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}
// Una función que reciba un objeto y un string… El string va a ser el nombre de una propiedad
const funcion = (object,string) => {
    // Esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes la función debe retornar true o false
    console.log(object.hasOwnProperty(string));
}

funcion(Car, "name");