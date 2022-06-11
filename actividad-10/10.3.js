// Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
matriz = [7, 2, 5, 3, 5, 3]
br = [7, 2, 5, 4, 6, 3, 5, 3]

function missingElements(firstArray, secondArray) {
  let arr = []
  let shift = 0
  for (let i = 0; i < firstArray.length; i++) {
    while (!(firstArray[i] == secondArray[i + shift])) {
      arr.push(secondArray[i + shift])
      shift++
    }
  }
  return arr
}

// Los números que faltan en arr son [4,6]
console.log(missingElements(matriz, br))