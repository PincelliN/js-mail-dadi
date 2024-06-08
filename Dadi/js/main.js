
//Creo un array con dentro le faccie di un dado
let User=[1,2,3,4,5,6]; 
/*Creo un variabile utilizzando l'array appena scritto 
cancolo un valore indice attraverso la seguente somma
Math floor = seve per arrotondare il numero ottenuto per difetto
Math random produce un numero variabile tra 0 e 1 escudendo l'uno
array.length mi dice quanto e lungo il mio array in questo caso 6  */
let UserResult = User[ Math.floor(Math.random()*User.length)];
console.log(UserResult);
let PcResult = User[Math.floor(Math.random() * User.length)];
console.log(PcResult);
if(UserResult>PcResult){
    console.log("you win");
}else if (UserResult<PcResult) {
    console.log("you lose");
} else {
    console.log("draw");
    
}