// Chiedo all'utente di inserire una parola
var word = prompt("Inserisci una parola").toLocaleUpperCase()
    
// Invoco la funzione per creare la parola inversa
var invertedWord = reverseWord(word);

// Stampo a schermo se la parola è o non è palindroma
if(word == invertedWord){
document.getElementById("pal_or_not").innerHTML = 'La parola è palindroma';
} else {
document.getElementById("pal_or_not").innerHTML ='La parola non è palindroma';
}

// L’utente sceglie pari o dispari
var userChoice =  prompt("Scegli! pari o dispari?").toLocaleLowerCase();

// inserisce un numero da 1 a 5.
var userNumber =  Number(prompt("Scegli un numero da 1 a 5"));

// Invoco la funzione per generare il numero casuale
var computerNumber = randomNumber(1, 5);

// Invoco la funzione per generare un esito
var esito = evenOdd(userNumber, computerNumber);

// Imposto una condizione per vedere chi ha vinto e stampo a schermo esito
if (userChoice == esito){
    document.getElementById("esito_partita").innerHTML = "Hai vinto!";
}else {
    document.getElementById("esito_partita").innerHTML = "Hai perso!";
}

// Verifiche
document.getElementById("user_word").innerHTML = word;
document.getElementById("inverted_word").innerHTML = invertedWord;
document.getElementById("user_number").innerHTML = userNumber;
document.getElementById("user_choice").innerHTML = userChoice;
document.getElementById("computer_number").innerHTML = computerNumber;
document.getElementById("sum_number").innerHTML = userNumber + computerNumber;
document.getElementById("sum_even_odd").innerHTML = esito;








    