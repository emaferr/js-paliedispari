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

// L’utente sceglie pari o dispari
var userChoice =  prompt("Scegli! pari o dispari?").toLocaleLowerCase();

// inserisce un numero da 1 a 5.
var userNumber =  Number(prompt("Scegli un numero da 1 a 5"));

// Invoco la funzione per generare il numero casuale
var computerNumber = randomNumber(1, 5);

// Invoco la funzione per generare un esito
var esito = evenOdd(userNumber, computerNumber);

// Stampo a schermo se l'utente ha vinto o perso impostando una condizione
if (userChoice == esito){
    document.write(" Hai vinto")
}else {
    document.write(" Hai perso")
}

// Verifiche
console.log("Parola utente : " + word);
console.log("Inverso parola utente : " + invertedWord);
console.log("Numero utente : " + userNumber);
console.log("Numero computer : " + computerNumber);
console.log("Somma numeri : " + (userNumber + computerNumber));
console.log("Scelta utente : " + userChoice);
console.log("Esito somma numeri : " + esito);








    