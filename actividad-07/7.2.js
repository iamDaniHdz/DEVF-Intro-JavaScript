var numbers = [1,2,3,4,10,11]
let suma = 0
const sumaArray=(numbers)=>{
    for(i=0; i < numbers.length; i++){
        suma += numbers[i]
    }
    return suma
}

sumaArray(numbers)