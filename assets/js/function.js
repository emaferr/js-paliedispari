/**
 * ### La funzione ritorna l'inverso della stringa
 * @param {string} string Stringa da inserire
 * @returns {string} Inverso della stringa inserita
 */
 function reverseWord(string){
    var invertedString = string.split('').reverse().join('');

    return invertedString;
    }


/**
 * ### La funzione genera un numero random compreso fra un minimo e un massimo
 * @param {Number} minimum_number Numero minimo del range
 * @param {Number} max_number Numero massimo del range
 * @returns {Number} Ritorna un numero intero compreso nel range (minimo e massimo compreso)
 */
 function randomNumber(minimum_number, max_number) {
    minimum_number = Math.ceil(minimum_number);
    max_number = Math.floor(max_number);

    return Math.floor(Math.random() * (max_number - minimum_number + 1)) + minimum_number; //Il max è incluso e il min è incluso
    }
    

/**
 * ### La funzione determina se la somma tra due numeri è pari o dispari
 * @param {Number} number_one Primo numero da inserire
 * @param {Number} number_two Secondo numero da inserire
 * @returns {string} Ritorna pari o dispari
 */
 function evenOdd(number_one, number_two) {
    var rest = ((number_one + number_two) % 2);

    if (rest === 0){
        return "pari";
    }else {
        return "dispari"
    }

    }    
    