const searchWord = (sentence, word) => {
    arraySentence = sentence.split(" ")
    for (i = 0; i < arraySentence.length; i++) {
        if (arraySentence[i] == word) {
            console.log(arraySentence[i])
            valor = true
        } else {
            valor = false
        }
    }
    return valor
}

sentence = prompt("Ingrese una oración")
word = prompt("Ingrese una palabra a buscar")

searchWord(sentence, word)