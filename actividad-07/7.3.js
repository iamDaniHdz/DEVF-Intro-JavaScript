function reverseWord(word){
    return word.split("").reverse().join("");
}

const palindromoWord=(sentence)=>{
    let palindromo = reverseWord(sentence)
    if(palindromo == sentence){
        return true
    } else {
        return false
    }
}

console.log(palindromoWord("madam"));
console.log(palindromoWord("computadora"));