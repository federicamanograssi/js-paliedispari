// far puntare pari o dispari
var pari = "pari";
var dispari = "dispari";
do {
    var userBet = prompt('Scegli: pari o dispari?')
} while (userBet.slice().toLowerCase() != pari && userBet.slice().toLowerCase() != dispari )
console.log(userBet, userBet.charAt().toUpperCase()+userBet.slice(1).toLowerCase());


// far inserire un numero da 1 a 5
do {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
} while ((userNumber < 1) || (userNumber > 5));
console.log(userNumber);


// generare un numero casuale da 1 a 5
var randomNumber = Math.floor(Math.random()*(5 - 1))+ 1;
alert('io tiro ' + randomNumber)
console.log(randomNumber);

// sommare i due numeri
var sum = randomNumber + userNumber;
console.log(sum);

// verificare se la somma è pari o dispari
if (sum % 2 == 0){
    sum = "pari";
    console.log('pari')
} else {
    sum = "dispari";
    console.log('dispari')
}

// verificare se ha vinto
if (sum == userBet) {
    alert('La somma è ' + sum + ' . You won')
} else {
    alert('La somma è ' + sum + ' . You lose')
}