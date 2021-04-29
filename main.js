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



// Creo la funzione per generare un numero random intero
function randomNumber(minimum_number, max_number) {
  minimum_number = Math.ceil(minimum_number);
  max_number = Math.floor(max_number);
  return Math.floor(Math.random() * (max_number - minimum_number + 1)) + minimum_number; //Il max è incluso e il min è incluso
  }

// Creo la funzione che stabilisce se la somma di due numeri e pari o dispari
function evenOdd(number_one, number_two) {
    var rest = ((number_one + number_two) % 2);

    if (rest === 0){
        return "pari";
    }else {
        return "dispari"
    }

    }

// L’utente sceglie pari o dispari
var userChoice =  prompt("Scegli! pari o dispari?").toLocaleLowerCase();

// inserisce un numero da 1 a 5.
var userNumber =  Number(prompt("Scegli un numero da 1 a 5"));

// Invoco la funzione per generare il numero casuale
var computerNumber = randomNumber(1, 5);

// Invoco la funzione per generare un esito
var esito = evenOdd(userNumber, computerNumber);

console.log(userChoice);
console.log(esito);

// Stampo a schermo se l'utente ha vinto o perso impostando una condizione
if (userChoice == esito){
    document.write(" Hai vinto")
}else {
    document.write(" Hai perso")
}








    