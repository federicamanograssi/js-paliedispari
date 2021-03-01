// Chiedere all'utente di inserire una parola
var userWord = prompt('Inserisci una parola').toLowerCase();
console.log(userWord);

// // Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(x) {

    for (var i = 0; i < x.length; i++){
        var start = x.charAt(i);
        var end = x.charAt(x.length-(i+1));
        console.log(start, end);

        if (start != end){
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;
}  ;


// ------------------PROVIAMO LA FUNZIONE----------------
isPalindrome(userWord);
if (isPalindrome(userWord)){
    alert('è palindromo')
}else{
    alert('non è palindromo')
}