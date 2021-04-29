// Chiedo all'utente di inserire una parola
// var word = prompt("Inserisci una parola").toLocaleLowerCase();

// Rendo la parola un array di caratteri divisi
// var splitWord = word.split('');

// Inverto l'ordine dei carrateri
// var invertedWord = splitWord.reverse();

// La converto nuovamente in stringa
// var invertedWord = splitWord.join('');

// if(word == invertedWord){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }


// Semplifico tutto con una funzione che posso invocare

/**
 * ### La funzione ritorna l'inverso della stringa
 * @param {string} string Stringa da inserire
 * @returns {string} Inverso della stringa inserita
 */
function reverseWord(string){
var invertedString = string.split('').reverse().join('');  
return invertedString;
}

// Chiedo all'utente di inserire una parola
var word = prompt("Inserisci una parola").toLocaleLowerCase()

// Invoco la funzione per creare la parola inversa
var invertedWord = reverseWord(word);

// Stampo a schermo se la parola è o non è palindroma
if(word == invertedWord){
document.write('la parola è palindroma');
} else {
document.write('la parola non è palindroma');
}

  

  
