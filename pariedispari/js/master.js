// far puntare pari o dispari
var pari = "pari";
var dispari = "dispari";

do {
    var userBet = prompt('Scegli: pari o dispari?')
} while (userBet.slice().toLowerCase() != pari && userBet.slice().toLowerCase() != dispari )
console.log(userBet, userBet.charAt().toUpperCase()+userBet.slice(1).toLowerCase());


// far inserire un numero da 1 a 5
do {
    var userNumber = prompt('Inserisci un numero da 1 a 5');
} while ((userNumber < 1) || (userNumber > 5) || isNaN(userNumber) || userNumber.includes("."));
console.log(userNumber);
userNumber = parseInt(userNumber);
console.log(userNumber);
/* mettere il parseInt sul prompt non impediva all'utonto di mettere un numero con i decimali
all'interno del mio intervallo. in questo modo può mettere solo caratteri numerici senza punto,virgola o altri segni*/


// generare un numero casuale da 1 a 5 CON FUNZIONE
function randomNumber(min,max) {
    var result = Math.floor(Math.random()*(max - min))+ min;
    return result;
}

var myNumber = randomNumber(1,5);
alert('io tiro ' + myNumber)
console.log(myNumber);

// sommare i due numeri
var sum = myNumber + userNumber;
console.log(sum);

// verificare se la somma è pari o dispari CON FUNZIONE
function isEven(x){
    if (x % 2 != 0){
        return false;
    }
    return true
};

isEven(sum);
console.log(isEven(sum))

if(isEven(sum) == true){
    isEven(sum) == pari;
};
if(isEven(sum) == false){
    isEven(sum) == dispari;
};


// verificare se ha vinto
if (isEven(sum) == userBet) {
    alert('La somma è ' + sum + '. You won')
} else {
    alert('La somma è ' + sum + '. You lose')
}